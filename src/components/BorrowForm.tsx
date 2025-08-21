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
      <div className="max-w-md w-full bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-white/30 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-gradient-to-tr from-blue-400/20 to-indigo-500/20 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-4 shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-2">Borrow Book</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
            <p className="text-blue-600 mt-2 text-sm font-medium">{availableCopies} copies available</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md">
            <div className="group">
              <label className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-blue-600 transition-colors duration-200">
                Quantity *
              </label>
              <div className="relative">
                <input
                  type="number"
                  defaultValue={1}
                  {...register('quantity', {
                    required: 'Quantity is required',
                    valueAsNumber: true,
                    min: { value: 1, message: 'At least 1 copy required' },
                    max: { value: availableCopies, message: `Only ${availableCopies} copies available` }
                  })}
                  className="w-full p-4 bg-white/60 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 placeholder-slate-400 text-slate-800 hover:border-slate-300"
                  placeholder="Number of copies"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                  Max: {availableCopies}
                </div>
              </div>
              {errors.quantity && (
                <p className="text-red-500 text-sm mt-2 flex items-center">
                  <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs mr-2">!</span>
                  {errors.quantity.message}
                </p>
              )}
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-blue-600 transition-colors duration-200">
                Due Date *
              </label>
              <div className="relative">
                <input
                  type="date"
                  {...register('dueDate', { required: 'Due date is required' })}
                  className="w-full p-4 bg-white/60 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 placeholder-slate-400 text-slate-800 hover:border-slate-300"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              {errors.dueDate && (
                <p className="text-red-500 text-sm mt-2 flex items-center">
                  <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs mr-2">!</span>
                  {errors.dueDate.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200 relative overflow-hidden group disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 group-disabled:opacity-0 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center">
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Borrowing...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Borrow Book
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Status indicator */}
          <div className="mt-6 p-4 bg-blue-50/60 border border-blue-200/50 rounded-xl">
            <div className="flex items-center text-sm text-blue-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <span className="font-medium">Ready to borrow</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BorrowForm;
