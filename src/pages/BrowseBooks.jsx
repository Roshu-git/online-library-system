// Browse books by category and search by title or author

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import BookCard from '../components/BookCard';

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector(state => state.books);
  const [search, setSearch] = useState('');

// Filter books based on selected category and search text
  const filtered = books.filter(book => {
    const matchCategory = book.category === category;
    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {category} Books
      </h1>

{/* // Search books by title or author */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full p-3 border rounded-xl mb-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}