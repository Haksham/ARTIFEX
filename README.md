# Artifex Website 🎨

Welcome to **Artifex**, a platform showcasing the stunning artwork of **Paarth Mehta**, a professional painter. This website allows users to explore a gallery of paintings, manage images, and learn more about the artist.

![Artifex Banner](https://via.placeholder.com/1200x400?text=Artifex+Website+Banner)

---

## 🌟 Features

- **Dynamic Gallery**: View a collection of paintings with a clean and responsive design.
- **Image Management**: Add, delete, and manage images (admin functionality).
- **Authentication**: Secure login system using Firebase.
- **Visitor Counter**: Tracks the number of visitors to the website.
- **Dark Mode Support**: Automatically adjusts based on the user's system preferences.
- **Cloudinary Integration**: Efficient image storage and retrieval.
- **Responsive Design**: Optimized for all devices.

---

## 🖼️ Interface

### Home Page
![Home Page](https://via.placeholder.com/800x400?text=Home+Page)

### Image Management
![Image Management](https://via.placeholder.com/800x400?text=Image+Management)

### About Page
![About Page](https://via.placeholder.com/800x400?text=About+Page)

---

## ⚙️ Functionality

1. **Gallery**: Displays images fetched from Cloudinary.
2. **Add Image**: Upload images with titles and descriptions.
3. **Delete Image**: Remove images from the gallery.
4. **Authentication**: Login functionality using Firebase.
5. **Visitor Count**: Tracks and displays the number of visitors using MongoDB.

---

## 🛠️ Technology Stack

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Node.js, MongoDB
- **Authentication**: Firebase
- **Image Storage**: Cloudinary
- **Deployment**: Vercel

---

## 📋 Requirements

- Node.js (v16 or higher)
- MongoDB Atlas or local MongoDB instance
- Cloudinary account
- Firebase project with authentication enabled
- Environment variables:
  - `NEXT_PUBLIC_FIREBASE_API_KEY`
  - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
  - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
  - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
  - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
  - `NEXT_PUBLIC_FIREBASE_APP_ID`
  - `CLOUDINARY_CLOUD_NAME`
  - `CLOUDINARY_API_KEY`
  - `CLOUDINARY_API_SECRET`
  - `MONGODB_URI`

---

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/artifex-website.git
   cd artifex-website
   ```
2. Install dependencies:
   ```bash
   npm run install
   pip install -r requirements.txt
   ```
3. Run the development server:
   ```bash
   - npm run dev
   - npm run build
   - npm run start
   - Open http://localhost:3000 in your browser to view the project.
```


## Project Structure
      artifex_website/
      ├── app/
      │   ├── add/
      │   │   └── page.js          # Add Image Page
      │   ├── api/
      │   │   ├── route.js         # API for image management
      │   │   └── visitor-count/
      │   │       └── route.js     # Visitor count API
      │   ├── changes/
      │   │   └── page.js          # Manage Images Page
      │   ├── components/
      │   │   ├── footer.js        # Footer Component
      │   │   ├── header.js        # Header Component
      │   │   ├── index.js         # Gallery Component
      │   │   └── remove.js        # Remove Image Component
      │   ├── firebase/
      │   │   └── config.js        # Firebase Configuration
      │   ├── globals.css          # Global Styles
      │   ├── info/
      │   │   └── page.js          # About Page
      │   ├── layout.js            # Root Layout
      │   ├── page.js              # Home Page
      │   ├── sign-in/
      │   │   └── page.js          # Sign-In Page
      │   └── utils/
      │       └── cloudinary.js    # Cloudinary Configuration
      ├── .gitignore               # Git Ignore File
      ├── LICENSE                  # License File
      ├── README.md                # Project Documentation
      ├── jsconfig.json            # JavaScript Config
      ├── next.config.mjs         # Next.js Config
      ├── package.json             # Project Metadata and Scripts
      ├── postcss.config.mjs       # PostCSS Config
      └── tailwind.config.js       # Tailwind CSS Config

## Acknowledgments
  - Cloudinary for image storage.<br>
  - Firebase for authentication.<br>
  - MongoDB for visitor tracking.<br>
  - Next.js for the framework.<br>
  - Tailwind CSS for styling.<br>
<br>
# Feel free to contribute to this project by submitting issues or pull requests. Happy coding!