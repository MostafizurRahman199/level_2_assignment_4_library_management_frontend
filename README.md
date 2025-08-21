
# 📚 Library Management System

A full-stack **Library Management System** built with **React, TypeScript, Node.js, Express, and MongoDB**.  
This application allows users to manage books, track borrowing activities, and view library statistics.



## 🌟 Features

### Frontend 

link : https://level2-ass-2-library-management.netlify.app/

- 📖 **Book Management**: View, add, edit, and delete books  
- 🔄 **Borrow System**: Borrow books with due dates and quantity tracking  
- 📱 **Responsive Design**: Mobile-friendly interface using Tailwind CSS  
- ⚡ **Real-time Updates**: RTK Query for efficient state management  
- 🛡️ **Type Safety**: Full TypeScript implementation  

### Backend

Live Link : https://level-2-assignment-2-backend-librar.vercel.app/api

- 🔗 **RESTful API**: Clean API endpoints for all operations  
- 🗄️ **MongoDB Integration**: Mongoose ODM for data modeling  
- 📑 **Pagination**: Efficient data retrieval for large book collections  
- ❌ **Error Handling**: Comprehensive error handling and validation  
- 🛡️ **TypeScript**: Full type safety throughout the backend  

---

## 🛠️ Tech Stack

### Frontend
- React 18 with TypeScript  
- Redux Toolkit & RTK Query  
- React Router  
- Tailwind CSS  
- Lucide React (icons)  
- Axios  

### Backend
- Node.js with Express.js  
- TypeScript  
- MongoDB with Mongoose ODM  
- CORS  
- Express Rate Limit  

---

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)  
- MongoDB Atlas account or local MongoDB installation  
- Git  

---

### 🔹 Frontend Setup

```bash
# Clone the repository
git clone https://github.com/username/library-management-frontend.git
cd library-management-frontend

# Install dependencies
npm install
````

**Environment Configuration**
Create a `.env` file in the root directory:

```env
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_ENVIRONMENT=development
```

**Start the development server**:

```bash
npm start
```

Frontend available at 👉 [http://localhost:3000](http://localhost:3000)

---

### 🔹 Backend Setup

```bash
cd library-management-backend
npm install
```

**Environment Configuration**
Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/library_management_2
```

**Start the development server**:

```bash
npm run dev
```

Backend API available at 👉 [http://localhost:5000](http://localhost:5000)

---

## 🗄️ Database Schema

### Book Model

```ts
{
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
}
```

### Borrow Model

```ts
{
  bookId: ObjectId;
  quantity: number;
  dueDate: Date;
}
```

---

## 📚 API Endpoints

### Books

* `GET /api/books` → Get all books (with pagination)
* `GET /api/books/:id` → Get a single book
* `POST /api/books` → Create a new book
* `PUT /api/books/:id` → Update a book
* `DELETE /api/books/:id` → Delete a book

### Borrow

* `POST /api/borrow` → Borrow a book
* `GET /api/borrow/summary` → Get borrowing summary
* `DELETE /api/borrow/:id` → Return a borrowed book

---

## 🚀 Deployment

### Frontend Deployment (Vercel / Netlify)

```bash
npm run build
```

Deploy the `build` folder.

### Backend Deployment (Heroku / Railway)

* Set environment variables
* Deploy backend code
* Ensure MongoDB connection string is configured

---

## 🧪 Testing

### Frontend

```bash
npm test
```

### Backend

```bash
npm test
```

### API Testing

* Use **Postman** with the provided collection to test all endpoints.

---

## 📱 Usage

* **View Books** → Navigate to the books page
* **Add Books** → Use the "Add Book" form
* **Edit Books** → Click the edit icon
* **Borrow Books** → Use the borrow button
* **View Summary** → See borrowing statistics

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch:

   ```bash
   git checkout -b feature-name
   ```
3. Commit changes:

   ```bash
   git commit -m "Add feature"
   ```
4. Push to branch:

   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request

---


## 🆘 Support

If you face issues:

* Check console for errors
* Verify `.env` variables
* Ensure MongoDB is running
* Open an issue on GitHub

---

## 🙏 Acknowledgments

* [React](https://react.dev/)
* [MongoDB](https://www.mongodb.com/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Redux Toolkit](https://redux-toolkit.js.org/)


