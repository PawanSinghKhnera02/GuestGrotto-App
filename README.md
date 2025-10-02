# 🏡 GuestGrotto: A Full-Stack Lodging Platform

## 🌟 Project Overview
GuestGrotto is a full-featured, responsive web application inspired by leading global lodging platforms (like Airbnb). It demonstrates complex role-based user management for hosts and guests, secure property listing, and personalized user interactions.

This project showcases a complete full-stack architecture, focusing on secure user authentication, robust data management using Mongoose, and a modern, utility-first UI built with Tailwind CSS.

## ✨ Core Functionality & Features

GuestGrotto uses distinct roles to separate user capabilities:

### Host Features
- **Account Creation:** Hosts can create dedicated accounts.
- **Property Management (CRUD):** Hosts can add, edit, and delete their property listings.
- **Secure Verification:** Dedicated login and backend verification checks for host access.

### Guest Features
- **Account Creation:** Guests can create dedicated accounts.
- **Property Browsing:** Guests can view and search all available property listings.
- **Favorites Management:** Guests can add and remove properties from their personalized favorites list.
- **Secure Verification:** Dedicated login and backend verification checks for guest access.

### General Features
- **Responsive Browsing:** View and search properties across all screen sizes (mobile, tablet, desktop).
- **Secure Authentication:** User registration, login, and secure session handling using `bcryptjs` and `express-session`.
- **Server-Side Rendering:** Uses EJS (Embedded JavaScript) to render dynamic pages efficiently.
- **Clean CSS Workflow:** Tailwind CSS is compiled automatically during deployment using the `postinstall` script, ensuring an optimized production stylesheet.

## 💻 Tech Stack

| Category    | Technology       | Description                                        |
|------------|-----------------|---------------------------------------------------|
| Backend    | Node.js & Express.js | Server-side runtime and web framework.          |
| Database   | MongoDB & Mongoose  | NoSQL database with Mongoose ODM for structured data handling and validation. |
| Templating | EJS               | Used for dynamic, server-side HTML rendering.    |
| Styling    | Tailwind CSS      | Utility-first framework providing all styling classes. |
| Security   | bcryptjs          | Used for secure password hashing and storage.   |

## ⚙️ Local Setup and Installation

Follow these steps to get a copy of GuestGrotto running on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/PawanSinghKhnera02/GuestGrotto-App
cd GuestGrotto-App

2. Install Dependencies
npm install

3. Set Environment Variables

Create a file named .env in the root of your project and add your MongoDB connection string and a secret key:

MONGODB_URI=<Your MongoDB Connection String>
SESSION_SECRET=<A Long, Random String for Session Encryption>

4. Run the Application

Start the server in development mode (uses nodemon for file watching):

npm run dev
