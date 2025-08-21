
//pages/AddBookPage.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { useCreateBookMutation } from '../store/api/bookApi';
import type { BookFormData } from '../types';

const AddBookPage: React.FC = () => {


  const navigate = useNavigate();
  const [createBook] = useCreateBookMutation();


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
    <div className='min-h-screen w-full flex flex-col items-center justify-start py-16 px-4 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200'>
     
      <BookForm onSubmit={handleSubmit}  heading={"Add Book"} />
    </div>
  );
};

export default AddBookPage;