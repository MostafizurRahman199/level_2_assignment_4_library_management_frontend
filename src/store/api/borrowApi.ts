//store/api/borrowApi.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Borrow, BorrowFormData, BorrowSummary, } from '../../types';

const BASE_URL = 'https://level-2-assignment-2-backend-librar.vercel.app/api';

export const borrowApi = createApi({


  reducerPath: 'borrowApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Borrow', 'Book'],


  endpoints: (builder) => ({


    // borrowBook: builder.mutation<Borrow, BorrowFormData>({
    //   query: (borrowData) => ({
    //     url: '/borrow',
    //     method: 'POST',
    //     body: borrowData,
    //   }),
    //   invalidatesTags: ['Borrow', 'Book'],
    // }),



    borrowBook: builder.mutation<Borrow, BorrowFormData>({
      query: (borrowData) => ({
        url: '/borrow',
        method: 'POST',
        body: borrowData,
      }),
      invalidatesTags: (result, error, { bookId }) => [
        { type: 'Book', id: bookId }, // ✅ refetch single book
        'Book',                       // ✅ refetch book list
        'Borrow',
      ],
    }),




    getBorrowSummary: builder.query<BorrowSummary[], void>({
      query: () => '/borrow/summary',
      providesTags: ['Borrow'],
    }),


    returnBook: builder.mutation<void, string>({
      query: (borrowId) => ({
        url: `/borrow/${borrowId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Borrow'],
    }),

    
  }),
});

export const {
  useBorrowBookMutation,
  useGetBorrowSummaryQuery,
  useReturnBookMutation,
} = borrowApi;