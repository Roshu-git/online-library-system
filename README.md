# Online Library System 
## Project Overview 
The **Online Library System** is a responsive web application built with **React, Vite, Redux Toolkit, React Router, and Tailwind CSS**. It allows users to browse books by category, search books by title or author, view detailed information about a book, and add new books to the library.

# Features 
### Home Page 
- Welcome message 
- Book categories (Fiction, Non-Fiction, Sci-Fi) 
- Popular books displayed as cards 
- Navigation bar with links to Home, Browse Books, and Add Book 

### Browse Books Page 
- Filter books by category using dynamic routing 
- Search books by title or author 
- View Details button for each book 

### Book Details Page 
- Displays book title, author, description, and rating 
- Back to Browse button ### Add Book Page 
- Form to add a new book 
- Redux used to manage the global books state 

## Tech Stack 
- **React** 
- **Vite** 
- **Redux Toolkit** 
- **React Router DOM** 
- **Tailwind CSS** 
- **Lucide React Icons**

## Project Structure 
src/ 
components/ 
Navbar.jsx 
BookCard.jsx 

pages/ 
Home.jsx 
BrowseBooks.jsx 
BookDetails.jsx 
AddBook.jsx 

redux/ 
store.js 
booksSlice.js 

data/ 
books.js 
App.jsx 
main.jsx 
index.css

## Routing 
- `/` → Home 
- `/books/:category` → Browse books by category 
- `/book/:id` → Book details 
- `/add-book` → Add a new book 

## Redux State Management 
The application uses **Redux Toolkit** to manage the list of books globally. 

### Actions 
- `addBook`
### Reducer 
- `booksSlice`

## Tailwind CSS Setup 
This project uses **Tailwind CSS v4 with Vite**. 
### Install 
npm install tailwindcss @tailwindcss/vite 
### Configure Vite 
In `vite.config.js`: 
import { defineConfig } from 'vite' 
import react from '@vitejs/plugin-react' 
import tailwindcss from '@tailwindcss/vite' 
export default defineConfig({ plugins: [react(), tailwindcss()], }) 

### Import Tailwind 
In `src/index.css`: @import "tailwindcss";

## Installation and Run 
Clone the repository and run the following commands: 
npm install 
npm run dev 
Open in browser: http://localhost:5173

## GitHub Repository 
https://github.com/Roshu-git/online-library-system