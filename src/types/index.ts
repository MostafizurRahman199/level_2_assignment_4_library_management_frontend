export interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Borrow {
  _id: string;
  bookId: string;
  quantity: number;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface BorrowSummary {
  bookId: string;
  title: string;
  isbn: string;
  totalQuantity: number;
}

export interface BookFormData {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
}

export interface BorrowFormData {
  bookId: string;
  quantity: number;
  dueDate: string;
}