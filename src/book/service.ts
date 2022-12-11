import { Book } from './book';

export const getFavoriteBooks = (): Book[] => {
  const rawBooks = localStorage.getItem('favorite_books');

  if (rawBooks == null) {
    return [];
  }

  const books = JSON.parse(rawBooks) as Book[];

  return books;
};

export const addBookToFavorites = (book: Book) => {
  const favoriteBooks = getFavoriteBooks();

  const hasBeenAdded =
    favoriteBooks.filter((favoriteBook) => favoriteBook.id === book.id).length >
    0;

  if (!hasBeenAdded) {
    const newFavoriteBook: Book = {
      id: book.id,
      volumeInfo: {
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        averageRating: book.volumeInfo.averageRating,
        imageLinks: book.volumeInfo.imageLinks,
      },
    };

    favoriteBooks.push(newFavoriteBook);
    localStorage.setItem('favorite_books', JSON.stringify(favoriteBooks));
  }
};
