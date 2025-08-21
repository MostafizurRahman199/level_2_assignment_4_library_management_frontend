


import React, { useState } from 'react';
import BookList from '../components/BookList';
import { useGetBooksQuery } from '../store/api/bookApi';

const BooksPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const limit = 10;

  // ✅ Use the page state in the query
  const { data, isLoading, error } = useGetBooksQuery(
    { page, limit },
    { refetchOnMountOrArgChange: true }
  );

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

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
 



<div className="min-h-screen w-full flex flex-col items-center justify-start py-16 px-4 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
    
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4 text-center">
          All Books
        </h1>
       

       {data && (
        <BookList
          books={data.books}
          currentPage={page}
          totalPages={data.totalPages}
          onPageChange={handlePageChange}
        />
      )}
    
    </div>
  );
};

export default BooksPage;