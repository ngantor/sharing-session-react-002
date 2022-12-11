import { useState } from 'react';
import { Book } from '../book/book';
import { getFavoriteBooks } from '../book/service';
import BookCard from '../book/components/BookCard';

function FavoritePage() {
  const [books] = useState<Book[]>(getFavoriteBooks());

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4 text-white">
        My Favorites Books
      </h1>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookCard book={book} />;
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FavoritePage;
