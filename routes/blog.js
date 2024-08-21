const { Router } = require("express");
const multer = require("multer");
const path = require("path");
const Blog = require("../models/blog");
const Comment = require("../models/comment");

const router = Router();

//config multer to store file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, path.resolve(`./public/uploads`));
  },
  filename: function (req, file, cb) {
    const originalName = file.originalname;
    const safeName = originalName.replace(/\s+/g, "-"); // Replace spaces with hyphens
    const fileName = `${Date.now()}-${safeName}`;
    cb(null, fileName);
  },
});
const upload = multer({ storage });

router.get("/add-new", (req, res) => {
  return res.render("addBlog", {
    user: req.user,
  });
});

router.get("/myblog", async (req, res) => {
  try {
    const myBlogs = await Blog.find({ createdBy: req.user._id });
    res.render("myblog", {
      user: req.user,
      blogs: myBlogs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occured while retrieving your blogs.");
  }
});

router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("createdBy");
  const comments = await Comment.find({ blogId: req.params.id }).populate(
    "createdBy"
  );
  // console.log(comments);
  return res.render("blog", {
    user: req.user,
    blog,
    comments,
  });
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    //sucessfully deleted
    res.status(200).json({ message: "Blog Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/comment/:blogId", async (req, res) => {
  await Comment.create({
    content: req.body.content,
    blogId: req.params.blogId,
    createdBy: req.user._id,
  });
  return res.redirect(`/blog/${req.params.blogId}`);
});

router.post("/", upload.single("coverImage"), async (req, res) => {
  const { title, body } = req.body;
  const blog = await Blog.create({
    title,
    body,
    createdBy: req.user._id,
    coverImageURL: `/uploads/${req.file.filename}`,
  });
  return res.redirect(`/blog/${blog._id}`);
});
module.exports = router;
