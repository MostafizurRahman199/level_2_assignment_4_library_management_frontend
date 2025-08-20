//components/BookForm.tsx

import React from "react";
import { useForm } from "react-hook-form";
import type { BookFormData } from "../types";

interface BookFormProps {
  onSubmit: (data: BookFormData) => void;
  initialValues?: BookFormData;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit, initialValues }) => {

    
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormData>({
    defaultValues: initialValues || {
      title: "",
      author: "",
      genre: "",
      isbn: "",
      description: "",
      copies: 1,
    },
  });

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Add / Edit Book</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="w-full p-2 border rounded-md"
            placeholder="Book title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Author</label>
          <input
            {...register("author", { required: "Author is required" })}
            className="w-full p-2 border rounded-md"
            placeholder="Author name"
          />
          {errors.author && <p className="text-red-500 text-sm">{errors.author.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Genre</label>
          <input
            {...register("genre", { required: "Genre is required" })}
            className="w-full p-2 border rounded-md"
            placeholder="e.g. Fiction, History"
          />
          {errors.genre && <p className="text-red-500 text-sm">{errors.genre.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">ISBN</label>
          <input
            {...register("isbn", { required: "ISBN is required" })}
            className="w-full p-2 border rounded-md"
            placeholder="ISBN number"
          />
          {errors.isbn && <p className="text-red-500 text-sm">{errors.isbn.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            {...register("description")}
            className="w-full p-2 border rounded-md"
            placeholder="Short description"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Copies</label>
          <input
            type="number"
            {...register("copies", {
                required: true,
                min: 1,
                valueAsNumber: true,   // ✅ ensures it's sent as number not string
            })}
            className="w-full p-2 border rounded-md"
            placeholder="Number of copies"
            />

          {errors.copies && <p className="text-red-500 text-sm">At least 1 copy required</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Save Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;




