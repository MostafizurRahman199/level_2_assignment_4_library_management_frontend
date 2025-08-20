
//pages/AddBookPage.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { useCreateBookMutation } from '../store/api/bookApi';
import type { BookFormData } from '../types';

const AddBookPage: React.FC = () => {


  const navigate = useNavigate();
  const [createBook, { isLoading }] = useCreateBookMutation();


const handleSubmit = async (data: BookFormData) => {
  try {
    await createBook({ ...data, copies: Number(data.copies) }).unwrap();
    navigate('/books');
  } catch (error: any) {
    console.error('Failed to create book:', error?.data || error?.error || error);
    alert(error?.data?.errors?.[0]?.message || 'Failed to create book');
  }
};


  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Book</h1>
      <BookForm onSubmit={handleSubmit}  />
    </div>
  );
};

export default AddBookPage;