# Movie App - React & Vite Frontend

This project is a modern, responsive React web application that fetches popular movies, allows users to search for movies, and includes pages to manage favorite movies, built using **The Movie Database (TMDB)** API.

## 🚀 Features

- **List Popular Movies:** Fetches and displays the most recent popular movies on the homepage via the TMDB API.
- **Movie Search:** Search for any movie by title using the search bar.
- **Pagination (Load More):** Supports paging with a "Load More" button and scroll-triggered loading.
- **Login Page Layout:** A sleek, styled sign-in form for user authentication.
- **Favorites Page Layout:** A dedicated layout to view and manage favorited movies.
- **Responsive Design:** Completely responsive layout for mobile, tablet, and desktop screens built using Tailwind CSS v4 and Bootstrap.

## 🛠️ Tech Stack

- **React 18 & Vite:** Fast build tool and component-based frontend library.
- **Tailwind CSS v4:** Modern utility-first styling.
- **Bootstrap & React Bootstrap:** Component framework for styling and layout utilities.
- **React Router Dom v7:** Routing and client-side navigation.
- **FontAwesome & React Icons:** Icon packs for user interface elements.

## 📦 Installation & Setup

To run this project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/HaticeAKTAS431/react-movie-frontend.git
   cd react-movie-frontend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   *The app will run locally at `http://localhost:5173`.*

4. **Build for Production:**
   ```bash
   npm run build
   ```

## 🔑 TMDB API Connection
The application is pre-configured with a TMDB API Key. If you prefer to use your own API key, you can update the `API_KEY` variable inside `src/services/api.js`.
