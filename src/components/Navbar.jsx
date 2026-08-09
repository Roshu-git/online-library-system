// Navigation bar for moving between pages

import { Link } from 'react-router-dom';
import { Home, Library, PlusCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex gap-6">
        <Link to="/" className='flex gap-2 items-center'>
        <Home size={18} />
        Home</Link>
        <Link to="/books/fiction" className='flex gap-2 items-center' >
        <Library size={18} />
        Browse Books</Link>
        <Link to="/add-book" className='flex gap-2 items-center'>
        <PlusCircle size={18} />
        Add Book</Link>
      </div>
    </nav>
  );
}