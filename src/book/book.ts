type VolumeInfo = {
  title: string;
  authors: string[];
  imageLinks: {
    thumbnail: string;
  };
  averageRating: number;
};

export type Book = {
  id: string;
  volumeInfo: VolumeInfo;
};
