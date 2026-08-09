// Reusable card component to display a book summary

import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  return (
    <div className="border rounded-2xl p-4 shadow bg-white">
      <h3 className="text-xl font-bold mb-2">{book.title}</h3>
      <p className="text-gray-600 mb-2">{book.author}</p>
      <p className="text-sm mb-4 capitalize">{book.category}</p>
{/* // Navigate to detailed view of the selected book */}
      <Link
        to={`/book/${book.id}`}
        className="text-blue-600 font-medium"
      >
        View Details →
      </Link>
    </div>
  );
}