// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Edit, Trash2, BookOpen } from 'lucide-react';
// import type { Book } from '../types/index';
// import ConfirmationModal from './ConfirmationModal';
// import { useDeleteBookMutation } from '../store/api/bookApi';

// interface BookListProps {
//   books: Book[];
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
// }

// const BookList: React.FC<BookListProps> = ({ books, currentPage, totalPages, onPageChange }) => {
//   const [deleteBook] = useDeleteBookMutation();
//   const [bookToDelete, setBookToDelete] = useState<string | null>(null);

//   const handleDelete = async (id: string) => {
//     try {
//       await deleteBook(id).unwrap();
//       setBookToDelete(null);
//     } catch (error) {
//       console.error('Failed to delete book:', error);
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow overflow-hidden">
//       <div className="overflow-x-auto">
//         <table className="w-full table-auto">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Title
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Author
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Genre
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 ISBN
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Copies
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {books.map((book) => (
//               <tr key={book._id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                   {book.title}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {book.author}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {book.genre}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {book.isbn}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {book.copies}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span
//                     className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
//                       book.available
//                         ? 'bg-green-100 text-green-800'
//                         : 'bg-red-100 text-red-800'
//                     }`}
//                   >
//                     {book.available ? 'Available' : 'Unavailable'}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
//                   <Link
//                     to={`/edit-book/${book._id}`}
//                     className="text-blue-600 hover:text-blue-900"
//                   >
//                     <Edit size={16} />
//                   </Link>
//                   <button
//                     onClick={() => setBookToDelete(book._id)}
//                     className="text-red-600 hover:text-red-900"
//                   >
//                     <Trash2 size={16} />
//                   </button>
//                   <Link
//                     to={`/borrow/${book._id}`}
//                     className="text-green-600 hover:text-green-900"
//                   >
//                     <BookOpen size={16} />
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="bg-white px-6 py-3 flex items-center justify-between border-t border-gray-200">
//           <div className="flex-1 flex justify-between items-center">
//             <button
//               onClick={() => onPageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
//             >
//               Previous
//             </button>
//             <span className="text-sm text-gray-700">
//               Page <span className="font-medium">{currentPage}</span> of{' '}
//               <span className="font-medium">{totalPages}</span>
//             </span>
//             <button
//               onClick={() => onPageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Confirmation Modal */}
//       <ConfirmationModal
//         isOpen={!!bookToDelete}
//         onClose={() => setBookToDelete(null)}
//         onConfirm={() => bookToDelete && handleDelete(bookToDelete)}
//         title="Delete Book"
//         message="Are you sure you want to delete this book? This action cannot be undone."
//       />
//     </div>
//   );
// };

// export default BookList;






import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Edit, Trash2, BookOpen } from 'lucide-react';
import type { Book } from '../types/index';
import ConfirmationModal from './ConfirmationModal';
import { useDeleteBookMutation } from '../store/api/bookApi';

interface BookListProps {
  books: Book[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const BookList: React.FC<BookListProps> = ({ books, currentPage, totalPages, onPageChange }) => {
  const [deleteBook] = useDeleteBookMutation();
  const [bookToDelete, setBookToDelete] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id).unwrap();
      setBookToDelete(null);
    } catch (error) {
      console.error('Failed to delete book:', error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100/70 backdrop-blur-sm">
            <tr>
              {['Title', 'Author', 'Genre', 'ISBN', 'Copies', 'Status', 'Actions'].map((header) => (
                <th
                  key={header}
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wide"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {books.map((book) => (
              <tr
                key={book._id}
                className="hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{book.title}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{book.author}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{book.genre}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{book.isbn}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{book.copies}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${
                      book.available
                        ? 'bg-green-100 text-green-700 ring-1 ring-green-400/50'
                        : 'bg-red-100 text-red-700 ring-1 ring-red-400/50'
                    }`}
                  >
                    {book.available ? 'Available' : 'Unavailable'}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-medium flex gap-3">
                  <Link
                    to={`/edit-book/${book._id}`}
                    className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition"
                  >
                    <Edit size={18} />
                  </Link>
                  <button
                    onClick={() => setBookToDelete(book._id)}
                    className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                  <Link
                    to={`/borrow/${book._id}`}
                    className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700 transition"
                  >
                    <BookOpen size={18} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-200">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page <span className="font-semibold text-gray-900">{currentPage}</span> of{' '}
            <span className="font-semibold text-gray-900">{totalPages}</span>
          </span>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={!!bookToDelete}
        onClose={() => setBookToDelete(null)}
        onConfirm={() => bookToDelete && handleDelete(bookToDelete)}
        title="Delete Book"
        message="Are you sure you want to delete this book? This action cannot be undone."
      />
    </div>
  );
};

export default BookList;
