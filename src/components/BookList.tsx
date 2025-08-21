



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
//     <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden border border-gray-100">
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead className="bg-gray-100/70 backdrop-blur-sm">
//             <tr>
//               {['Title', 'Author', 'Genre', 'ISBN', 'Copies', 'Status', 'Actions'].map((header) => (
//                 <th
//                   key={header}
//                   className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wide"
//                 >
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {books.map((book) => (
//               <tr
//                 key={book._id}
//                 className="hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-colors"
//               >
//                 <td className="px-6 py-4 text-sm font-medium text-gray-900">{book.title}</td>
//                 <td className="px-6 py-4 text-sm text-gray-700">{book.author}</td>
//                 <td className="px-6 py-4 text-sm text-gray-700">{book.genre}</td>
//                 <td className="px-6 py-4 text-sm text-gray-700">{book.isbn}</td>
//                 <td className="px-6 py-4 text-sm text-gray-700">{book.copies}</td>
//                 <td className="px-6 py-4">
//                   <span
//                     className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${
//                       book.available
//                         ? 'bg-green-100 text-green-700 ring-1 ring-green-400/50'
//                         : 'bg-red-100 text-red-700 ring-1 ring-red-400/50'
//                     }`}
//                   >
//                     {book.available ? 'Available' : 'Unavailable'}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 text-sm font-medium flex gap-3">
//                   <Link
//                     to={`/edit-book/${book._id}`}
//                     className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition"
//                   >
//                     <Edit size={18} />
//                   </Link>
//                   <button
//                     onClick={() => setBookToDelete(book._id)}
//                     className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 transition"
//                   >
//                     <Trash2 size={18} />
//                   </button>
//                   <Link
//                     to={`/borrow/${book._id}`}
//                     className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700 transition"
//                   >
//                     <BookOpen size={18} />
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-200">
//           <button
//             onClick={() => onPageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
//           >
//             Previous
//           </button>
//           <span className="text-sm text-gray-600">
//             Page <span className="font-semibold text-gray-900">{currentPage}</span> of{' '}
//             <span className="font-semibold text-gray-900">{totalPages}</span>
//           </span>
//           <button
//             onClick={() => onPageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
//           >
//             Next
//           </button>
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
import Swal from 'sweetalert2';
import type { Book } from '../types/index';
import { useDeleteBookMutation } from '../store/api/bookApi';

interface BookListProps {
  books: Book[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const BookList: React.FC<BookListProps> = ({ books, currentPage, totalPages, onPageChange }) => {
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: 'Delete Book',
      text: 'Are you sure you want to delete this book? This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc2626', // Red
      cancelButtonColor: '#6b7280', // Gray
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      try {
        await deleteBook(id).unwrap();
        Swal.fire('Deleted!', 'The book has been deleted.', 'success');
      } catch (error) {
        Swal.fire('Error!', 'Failed to delete the book.', 'error');
      }
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
                    onClick={() => handleDelete(book._id)}
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
    </div>
  );
};

export default BookList;
