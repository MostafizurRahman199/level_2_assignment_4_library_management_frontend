import React, { useState } from 'react';
import BookList from '../components/BookList';
import { useGetBooksQuery } from '../store/api/bookApi';

const BooksPage: React.FC = () => {


  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetBooksQuery({ page, limit: 10 });

  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        Error loading books. Please try again later.
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">All Books</h1>
      </div>

      {data && (
        <BookList
          books={data.books}
          currentPage={page}
          totalPages={data.totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};

export default BooksPage;