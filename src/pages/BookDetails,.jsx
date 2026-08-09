import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function BookDetails() {
  const { id } = useParams();
  const books = useSelector(state => state.books);

  const book = books.find(b => b.id === Number(id));

  if (!book) return <p className="p-6">Book not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow p-6">
        <h1 className="text-3xl font-bold mb-3">{book.title}</h1>
        <p className="text-lg text-gray-600 mb-4">
          by {book.author}
        </p>

        <p className="mb-4">{book.description}</p>

        <p className="font-semibold mb-6">
          ⭐ Rating: {book.rating}
        </p>

        <Link
          to={`/books/${book.category}`}
          className="text-blue-600 font-medium"
        >
          ← Back to Browse
        </Link>
      </div>
    </div>
  );
}