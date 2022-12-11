import { Book } from '../book';
import { addBookToFavorites } from '../service';
import Rating from './Rating';

interface BookCardProps {
  book: Book;
}

function BookCard({ book }: BookCardProps) {
  const handleAddToFavorite = (book: Book) => {
    addBookToFavorites(book);
  };

  return (
    <article className="grid grid-cols-[auto,1fr] gap-6 bg-slate-800 rounded-xl p-6">
      <img
        src={book.volumeInfo.imageLinks.thumbnail}
        alt={book.volumeInfo.title}
      />
      <div className="flex flex-col justify-between">
        <header>
          <h2 className="text-xl font-bold text-white">
            {book.volumeInfo.title}
          </h2>
          <p className="flex gap-4 border-separate text-gray-200 text-sm">
            {book.volumeInfo.authors.join(', ')}
          </p>
          <div className="mt-2">
            <Rating rating={book.volumeInfo.averageRating} />
          </div>
        </header>
        <footer className="flex justify-end">
          <button
            onClick={() => handleAddToFavorite(book)}
            className="bg-purple-800 hover:bg-purple-700 py-2 w-10 aspect-square rounded-full grid place-content-center text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 aspect-square"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </footer>
      </div>
    </article>
  );
}

export default BookCard;
