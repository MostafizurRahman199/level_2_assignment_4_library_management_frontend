import React from 'react';
import BorrowSummary from '../components/BorrowSummary';
import { useGetBorrowSummaryQuery } from '../store/api/borrowApi';

const BorrowSummaryPage: React.FC = () => {

    
  const { data, error, isLoading } = useGetBorrowSummaryQuery();

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
        Error loading borrow summary. Please try again later.
      </div>
    );
  }

  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-start py-16 px-4 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200'>
      <h1 className="text-4xl font-extrabold text-blue-800 m-4 text-center">
          Borrow Summary
        </h1>
      {data && <BorrowSummary data={data} />}
    </div>
  );
};

export default BorrowSummaryPage;