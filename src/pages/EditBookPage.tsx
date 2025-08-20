import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { useGetBookQuery, useUpdateBookMutation } from '../store/api/bookApi';
import type { BookFormData } from '../types';

const EditBookPage: React.FC = () => {


  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: book, isLoading: isLoadingBook } = useGetBookQuery(id!);
  const [updateBook, { isLoading }] = useUpdateBookMutation();



  const handleSubmit = async (data: BookFormData) => {
    try {
      await updateBook({ id: id!, data }).unwrap();
      navigate('/books');
    } catch (error) {
      console.error('Failed to update book:', error);
    }
  };



  if (isLoadingBook) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }



  if (!book) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        Book not found.
      </div>
    );
  }



  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Book</h1>
     <BookForm  onSubmit={handleSubmit} initialValues={book}/>
 
    </div>
  );
};

export default EditBookPage;