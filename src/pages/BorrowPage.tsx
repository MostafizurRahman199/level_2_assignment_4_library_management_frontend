

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BorrowForm from '../components/BorrowForm';
import { useGetBookQuery } from '../store/api/bookApi';
import { useBorrowBookMutation } from '../store/api/borrowApi';
import type { BorrowFormData } from '../types';

const BorrowPage: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const { data: book, isLoading: isLoadingBook } = useGetBookQuery(bookId!);
  const [borrowBook, { isLoading }] = useBorrowBookMutation();

  const handleSubmit = async (data: BorrowFormData) => {
    try {
      await borrowBook({
        bookId: bookId!,
        quantity: data.quantity,
        dueDate: data.dueDate,
      }).unwrap();
      navigate('/borrow-summary');
    } catch (error) {
      console.error('Failed to borrow book:', error);
    }
  };

  if (isLoadingBook) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
        <div className="animate-spin rounded-full h-14 w-14 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-md">
          Book not found.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start py-16 px-4 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
    
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4 text-center">
          {book.title}
        </h1>
        <p className="text-blue-600 mb-8 text-center text-lg">
          by {book.author}
        </p>

        <BorrowForm
          onSubmit={handleSubmit}
          availableCopies={book.copies}
          isLoading={isLoading}
        />
    
    </div>
  );
};

export default BorrowPage;
