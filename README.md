Library Management System 📚
A full-stack Library Management System built with React, TypeScript, Node.js, Express, and MongoDB. This application allows users to manage books, track borrowing activities, and view library statistics.

🌟 Features
Frontend
Book Management: View, add, edit, and delete books

Borrow System: Borrow books with due dates and quantity tracking

Responsive Design: Mobile-friendly interface using Tailwind CSS

Real-time Updates: RTK Query for efficient state management

Type Safety: Full TypeScript implementation

Backend
RESTful API: Clean API endpoints for all operations

MongoDB Integration: Mongoose ODM for data modeling

Pagination: Efficient data retrieval for large book collections

Error Handling: Comprehensive error handling and validation

TypeScript: Full type safety throughout the backend

🛠️ Tech Stack
Frontend
React 18 with TypeScript

Redux Toolkit & RTK Query for state management

React Router for navigation

Tailwind CSS for styling

Lucide React for icons

Axios for HTTP requests

Backend
Node.js with Express.js

TypeScript for type safety

MongoDB with Mongoose ODM

CORS for cross-origin requests

Express Rate Limit for API protection

📦 Installation
Prerequisites
Node.js (v16 or higher)

MongoDB Atlas account or local MongoDB installation

Git

Frontend Setup
Clone the repository

bash
git clone <repository-url>
cd library-management-frontend
Install dependencies

bash
npm install
Environment Configuration
Create a .env file in the root directory:

env
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_ENVIRONMENT=development
Start the development server

bash
npm start
The frontend will be available at http://localhost:3000

Backend Setup
Navigate to backend directory

bash
cd library-management-backend
Install dependencies

bash
npm install
Environment Configuration
Create a .env file in the root directory:

env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/library_management_2
Start the development server

bash
npm run dev
The backend API will be available at http://localhost:5000

🗄️ Database Schema
Book Model
typescript
{
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
}
Borrow Model
typescript
{
  bookId: ObjectId;
  quantity: number;
  dueDate: Date;
}
📚 API Endpoints
Books
GET /api/books - Get all books (with pagination)

GET /api/books/:id - Get a single book

POST /api/books - Create a new book

PUT /api/books/:id - Update a book

DELETE /api/books/:id - Delete a book

Borrow
POST /api/borrow - Borrow a book

GET /api/borrow/summary - Get borrowing summary

DELETE /api/borrow/:id - Return a borrowed book

🚀 Deployment
Frontend Deployment (Vercel/Netlify)
Build the project: npm run build

Deploy the build folder to your preferred platform

Backend Deployment (Heroku/Railway)
Set environment variables in your deployment platform

Deploy the backend code

Ensure MongoDB connection string is properly configured

🧪 Testing
Frontend Testing
bash
npm test
Backend Testing
bash
npm test
API Testing with Postman
Import the provided Postman collection to test all API endpoints.

📱 Usage
View Books: Navigate to the books page to see all available books

Add Books: Use the "Add Book" form to add new books to the library

Edit Books: Click the edit icon to modify book details

Borrow Books: Use the borrow button to check out books

View Summary: Check the borrow summary page to see borrowing statistics

🤝 Contributing
Fork the repository

Create a feature branch: git checkout -b feature-name

Commit changes: git commit -m 'Add feature'

Push to branch: git push origin feature-name

Submit a pull request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🆘 Support
If you encounter any issues or have questions:

Check the console for error messages

Verify your environment variables are correctly set

Ensure MongoDB is properly connected

Open an issue on GitHub with detailed information

🙏 Acknowledgments
React team for the amazing framework

MongoDB for the robust database solution

Tailwind CSS for the utility-first CSS framework

Redux Toolkit for simplified state management
