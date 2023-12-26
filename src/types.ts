export interface IReport {
  author: string;
  book: IBook;
  content: string;
  date: number;
  id: number;
  isPrivate: false;
  like: number;
  profileImage: string;
  star: number;
  title: string;
  username: string;
}

export interface IBook {
  author: string;
  cover: string;
  description: string;
  isbn13: string;
  title: string;
}
