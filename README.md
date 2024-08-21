# VichaarDhaara - Blog Web App

VichaarDhaara is a feature-rich blog web application built using the MERN stack (MongoDB, Express.js, Node.js, and EJS).
This app allows users to create, view, comment on, and delete blogs, offering an intuitive and responsive user interface.

## Features

- **User Authentication**: Sign up, log in, and manage your account securely.
- **Create and Manage Blogs**: Authenticated users can create blogs with titles, content, and images. They can view all their blogs and delete them if needed.
- **Responsive Design**: The app is fully responsive and provides a seamless experience across devices.
- **Commenting System**: Users can comment on blogs, view comments, and interact with others.
- **Image Handling**: Supports uploading and displaying images uniformly across all blogs.

## Technologies Used

- **Frontend**:
  - HTML5
  - CSS3
  - Bootstrap 5
  - EJS (Embedded JavaScript Templates)
  
- **Backend**:
  - Node.js
  - Express.js

- **Database**:
  - MongoDB (with Mongoose)

- **Deployment**:
  - AWS Elastic Beanstalk

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/vichaardhaara.git
    cd vichaardhaara
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory and add your environment variables:
    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_uri
    SESSION_SECRET=your_session_secret
    ```
    
4. **Run the application**:
    ```bash
    npm start
    ```

5. **Access the app**:
   - Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Sign Up/Login**: Create an account or log in to access blog creation and management features.
- **Create a Blog**: Add a new blog with a title, content, and an optional cover image.
- **View Blogs**: Browse through all blogs on the homepage.
- **View Single Blog**: Click on any blog title to view the full blog post.
- **Comment on Blogs**: Leave comments on blog posts to engage with other users.
- **Delete a Blog**: If you no longer need a blog, delete it easily through the UI.

## Responsive Design

- The app is designed to be fully responsive and adapts to various screen sizes.
- Blog images are automatically resized to ensure a uniform and visually appealing layout.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository, create a new branch, and submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- **Bootstrap**: For the responsive layout and components.
- **Google Fonts**: For providing stylish fonts to enhance the UI.
- **MERN Stack**: For providing a solid foundation for this web application.

---

Developed by **Abhishek Rathod** - MERN Stack Developer
