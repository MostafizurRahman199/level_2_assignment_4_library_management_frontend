

// BorrowForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import type { BorrowFormData } from '../types';

interface BorrowFormProps {
  onSubmit: (data: BorrowFormData) => void | Promise<void>;
  availableCopies: number;
  isLoading?: boolean;
}

const BorrowForm: React.FC<BorrowFormProps> = ({ onSubmit, availableCopies, isLoading = false }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<BorrowFormData>({
    defaultValues: {
      bookId: '',
      quantity: 1,
      dueDate: '',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Quantity *
        </label>
       <input
        type="number"
        defaultValue={1}
        {...register('quantity', {
          required: 'Quantity is required',
          valueAsNumber: true,   // ✅ force number
          min: { value: 1, message: 'At least 1 copy required' },
          max: { value: availableCopies, message: `Only ${availableCopies} copies available` }
        })}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
        {errors.quantity && (
          <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Due Date *
        </label>
        <input
          type="date"
          {...register('dueDate', { required: 'Due date is required' })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.dueDate && (
          <p className="text-red-500 text-sm mt-1">{errors.dueDate.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 disabled:opacity-50"
      >
        {isLoading ? 'Borrowing...' : 'Borrow Book'}
      </button>
    </form>
  );
};

export default BorrowForm;
