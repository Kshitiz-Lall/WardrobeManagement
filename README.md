# Wardrobe Management System

## Overview

The Wardrobe Management System is a web application designed to help users manage their wardrobe effectively. Users can create and manage items in their wardrobe, categorize them, add colors, leave reviews, and tag items for better organization. This system includes functionality for user authentication, item management, categories, colors, reviews, tags, and item tags.

## Features

- **User Authentication**: Register, login, and manage user sessions.
- **Item Management**: Add, update, delete, and view items in the wardrobe.
- **Category Management**: Create and manage categories for organizing items.
- **Color Management**: Add and manage colors associated with items.
- **Review Management**: Users can leave reviews on items.
- **Tag Management**: Tag items for better organization.
- **Item Tags**: Associate tags with items.

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB Atlas account or a local MongoDB instance

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/wardrobe-management.git
    cd wardrobe-management
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB URI and JWT secret:
    ```env
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Run the application:
    ```sh
    npm start
    ```

5. The server will start on port 5000. You can access it at `http://localhost:5000`.

## API Endpoints

### User Endpoints

- **Register User**: `POST /api/users/register`
- **Login User**: `POST /api/users/login`
- **Get User**: `GET /api/users/:id`

### Item Endpoints

- **Create Item**: `POST /api/items`
- **Get All Items**: `GET /api/items`
- **Get Single Item**: `GET /api/items/:id`
- **Update Item**: `PUT /api/items/:id`
- **Delete Item**: `DELETE /api/items/:id`

### Category Endpoints

- **Create Category**: `POST /api/categories`
- **Get All Categories**: `GET /api/categories`
- **Get Single Category**: `GET /api/categories/:id`
- **Update Category**: `PUT /api/categories/:id`
- **Delete Category**: `DELETE /api/categories/:id`

### Color Endpoints

- **Create Color**: `POST /api/colors`
- **Get All Colors**: `GET /api/colors`
- **Get Single Color**: `GET /api/colors/:id`
- **Update Color**: `PUT /api/colors/:id`
- **Delete Color**: `DELETE /api/colors/:id`

### Review Endpoints

- **Create Review**: `POST /api/reviews`
- **Get All Reviews**: `GET /api/reviews`
- **Get Single Review**: `GET /api/reviews/:id`
- **Get Reviews by Item ID**: `GET /api/reviews/item/:item_id`
- **Update Review**: `PUT /api/reviews/:id`
- **Delete Review**: `DELETE /api/reviews/:id`

### Tag Endpoints

- **Create Tag**: `POST /api/tags`
- **Get All Tags**: `GET /api/tags`
- **Get Single Tag**: `GET /api/tags/:id`
- **Update Tag**: `PUT /api/tags/:id`
- **Delete Tag**: `DELETE /api/tags/:id`

### ItemTag Endpoints

- **Create ItemTag**: `POST /api/itemTags`
- **Get All ItemTags**: `GET /api/itemTags`
- **Get Single ItemTag**: `GET /api/itemTags/:id`
- **Update ItemTag**: `PUT /api/itemTags/:id`
- **Delete ItemTag**: `DELETE /api/itemTags/:id`
