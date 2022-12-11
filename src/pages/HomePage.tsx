import React, { useState } from 'react';
import { Book } from '../book/book';
import BookCard from '../book/components/BookCard';
import { searchBooks } from '../book/service';

const BASE_API_URL = 'https://www.googleapis.com/books/v1/volumes';

function Home() {
  const [books, setBooks] = useState<Book[]>([]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const keyword = formData.get('search');
    if (keyword === '') {
      return;
    }

    try {
      const books = await searchBooks(keyword as string);
      setBooks(books);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div>
        <h1 className="text-4xl font-bold text-center mb-4 text-white">
          Search Books
        </h1>
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            placeholder="Search here..."
            name="search"
            className="w-full py-2 px-6 rounded-full text-gray-400 text-sm tracking-wider focus:outline-purple-800 outline-none bg-slate-800"
          />
          <button
            type="submit"
            className="bg-purple-800 hover:bg-purple-700 w-10 aspect-square rounded-full flex-shrink-0 grid place-content-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 aspect-square text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </form>
      </div>
      <ul className="mt-8 space-y-6">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookCard book={book} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
