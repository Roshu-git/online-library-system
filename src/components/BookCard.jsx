// Reusable card component to display a book summary

import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Brain, Rocket } from 'lucide-react';

export default function BookCard({ book }) {
   // Choose icon based on category
  const getIcon = () => {
    switch (book.category) {
      case 'fiction':
        return <Sparkles size={48} className="text-pink-500" />;

      case 'non-fiction':
        return <Brain size={48} className="text-green-500" />;

      case 'sci-fi':
        return <Rocket size={48} className="text-blue-500" />;

      default:
        return <BookOpen size={48} className="text-purple-500" />;
    }
  };

  return (
    <div className="border rounded-2xl p-5 shadow bg-white hover:shadow-lg transition duration-300">

      {/* Category icon */}
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
          {getIcon()}
        </div>
      </div>

      {/* Book information */}
      <h3 className="text-xl font-bold text-center mb-2">
        {book.title}
      </h3>

      <p className="text-gray-600 text-center mb-2">
        {book.author}
      </p>

      <p className="text-sm text-center mb-4 capitalize text-gray-500">
        {book.category}
      </p>

      {/* Navigate to detailed view */}
      <Link
        to={`/book/${book.id}`}
        className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-medium transition"
      >
        View Details
      </Link>
    </div>
  );
}