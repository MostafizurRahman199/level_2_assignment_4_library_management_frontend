//store/api/bookApi.ts


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Book, BookFormData } from '../../types';

const BASE_URL = 'https://level-2-assignment-2-backend-librar.vercel.app/api';

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Book'],



  endpoints: (builder) => ({


    getBooks: builder.query<{ books: Book[]; totalPages: number; currentPage: number }, { page: number; limit: number }>({
      query: ({ page = 1, limit = 10 }) => `/books?page=${page}&limit=${limit}`,
      providesTags: ['Book'],
    }),


    getBook: builder.query<Book, string>({
      query: (id) => `/books/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Book', id }],
    }),


    createBook: builder.mutation<Book, BookFormData>({
      query: (newBook) => ({
        url: '/books',
        method: 'POST',
        body: newBook,
      }),
      invalidatesTags: ['Book'],
    }),


    updateBook: builder.mutation<Book, { id: string; data: BookFormData }>({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Book', id }, 'Book'],
    }),


    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Book'],
    }),

    
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;