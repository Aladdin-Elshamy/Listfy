# Listify - Frontend

Listify is a task management application that helps users organize their tasks efficiently. This repository contains the frontend built with React, while the backend is powered by Strapi.

## Features

- Create, update, and delete tasks
- User authentication and authorization
- Pagination for efficient data loading
- Smooth data fetching with **React Query**
- Caching to enhance performance and reduce unnecessary API calls
- Responsive UI for desktop and mobile

## Technologies Used

- **React** for building the user interface
- **React Query** for data fetching, caching, and state management
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Strapi** for backend API

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Aladdin-Elshamy/Listfy.git
   cd Listfy/frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file and configure the backend API URL:
   ```sh
   VITE_BASE_URL=http://localhost:1337
   ```

4. Start the development server:
   ```sh
   npm start
   ```

## Backend Setup

The backend is built with **Strapi**. To set up the backend:

1. Navigate to the backend folder:
   ```sh
   cd ../backend
   ```
2. Install dependencies and run Strapi:
   ```sh
   npm install
   npm run develop
   ```
