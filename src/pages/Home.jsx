import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import { Link } from 'react-router-dom';

export default function Home() {
  const books = useSelector(state => state.books);

  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi'];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mb-3">
          📚 Welcome to Online Library
        </h1>
        <p className="text-gray-600">
          Discover and manage your favorite books
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <div className="flex gap-4 mb-10 flex-wrap">
        {categories.map(cat => (
          <Link
            key={cat}
            to={`/books/${cat.toLowerCase()}`}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full"
          >
            {cat}
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-6">Popular Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.slice(0, 3).map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}