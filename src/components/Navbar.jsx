import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/books/fiction">Browse Books</Link>
        <Link to="/add-book">Add Book</Link>
      </div>
    </nav>
  );
}