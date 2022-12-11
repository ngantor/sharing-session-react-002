import { useEffect, useState } from 'react';
import { getFavoriteBooks } from '../book/service';
import { Book } from '../book/book';

function FavoritePage() {
  const [books, setBooks] = useState<Book[]>(getFavoriteBooks());

  return (
    <div>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <p>{book.volumeInfo.title}</p>
            <p>{book.volumeInfo.authors.join(',')}</p>
            <p>{book.volumeInfo.averageRating}</p>
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
            />
          </div>
        );
      })}
    </div>
  );
}

export default FavoritePage;
