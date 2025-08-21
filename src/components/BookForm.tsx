import React from "react";
import { useForm } from "react-hook-form";
import type { BookFormData } from "../types";

interface BookFormProps {
  onSubmit: (data: BookFormData) => void;
  initialValues?: BookFormData;
  heading:string
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit, initialValues, heading  }) => {
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
    <div className="min-h-screen w-full mx-auto   p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white/70 backdrop-blur-md shadow-2xl rounded-3xl p-8 border border-white/20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-tr from-blue-400/20 to-indigo-500/20 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-4 shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-2">{heading}</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="group">
                <label className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-blue-600 transition-colors duration-200">
                  Title
                </label>
                <div className="relative">
                  <input
                    {...register("title", { required: "Title is required" })}
                    className="w-full p-4 bg-white/60 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 placeholder-slate-400 text-slate-800 hover:border-slate-300"
                    placeholder="Book title"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                </div>
                {errors.title && <p className="text-red-500 text-sm mt-2 flex items-center"><span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs mr-2">!</span>{errors.title.message}</p>}
              </div>

              {/* Author */}
              <div className="group">
                <label className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-blue-600 transition-colors duration-200">
                  Author
                </label>
                <div className="relative">
                  <input
                    {...register("author", { required: "Author is required" })}
                    className="w-full p-4 bg-white/60 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 placeholder-slate-400 text-slate-800 hover:border-slate-300"
                    placeholder="Author name"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                </div>
                {errors.author && <p className="text-red-500 text-sm mt-2 flex items-center"><span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs mr-2">!</span>{errors.author.message}</p>}
              </div>

              {/* Genre */}
              <div className="group">
                <label className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-blue-600 transition-colors duration-200">
                  Genre
                </label>
                <div className="relative">
                  <input
                    {...register("genre", { required: "Genre is required" })}
                    className="w-full p-4 bg-white/60 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 placeholder-slate-400 text-slate-800 hover:border-slate-300"
                    placeholder="e.g. Fiction, History"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                </div>
                {errors.genre && <p className="text-red-500 text-sm mt-2 flex items-center"><span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs mr-2">!</span>{errors.genre.message}</p>}
              </div>

              {/* ISBN */}
              <div className="group">
                <label className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-blue-600 transition-colors duration-200">
                  ISBN
                </label>
                <div className="relative">
                  <input
                    {...register("isbn", { required: "ISBN is required" })}
                    className="w-full p-4 bg-white/60 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 placeholder-slate-400 text-slate-800 hover:border-slate-300"
                    placeholder="ISBN number"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                </div>
                {errors.isbn && <p className="text-red-500 text-sm mt-2 flex items-center"><span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs mr-2">!</span>{errors.isbn.message}</p>}
              </div>

              {/* Copies */}
              <div className="group">
                <label className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-blue-600 transition-colors duration-200">
                  Copies
                </label>
                <div className="relative">
                  <input
                    type="number"
                    {...register("copies", {
                      required: true,
                      min: 1,
                      valueAsNumber: true,
                    })}
                    className="w-full p-4 bg-white/60 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 placeholder-slate-400 text-slate-800 hover:border-slate-300"
                    placeholder="Number of copies"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                </div>
                {errors.copies && <p className="text-red-500 text-sm mt-2 flex items-center"><span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs mr-2">!</span>At least 1 copy required</p>}
              </div>
            </div>

            {/* Description */}
            <div className="group">
              <label className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-blue-600 transition-colors duration-200">
                Description
              </label>
              <div className="relative">
                <textarea
                  {...register("description")}
                  className="w-full p-4 bg-white/60 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 placeholder-slate-400 text-slate-800 hover:border-slate-300 resize-none h-24"
                  placeholder="Short description"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Save Book</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
