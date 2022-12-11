import React, { useState } from 'react';
import { Book } from '../book/book';
import { addBookToFavorites, getFavoriteBooks } from '../book/service';

const BASE_API_URL = 'https://www.googleapis.com/books/v1/volumes';

function Home() {
  const [books, setBooks] = useState<Book[]>([]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const keyword = formData.get('search');

    try {
      const res = await fetch(`${BASE_API_URL}?q=${keyword}`);

      const resJson = await res.json();

      const books = resJson.items as Book[];

      setBooks(books);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToFavorite = (book: Book) => {
    addBookToFavorites(book);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div>
        <form onSubmit={handleSearch}>
          <input type="text" placeholder="Search here..." name="search" />
        </form>
      </div>
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
              <button onClick={() => handleAddToFavorite(book)}>
                +Favorite
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
