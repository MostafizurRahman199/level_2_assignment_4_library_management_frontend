
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BooksPage from './pages/BooksPage';
import AddBookPage from './pages/AddBookPage';
import EditBookPage from './pages/EditBookPage';
import BorrowPage from './pages/BorrowPage';
import BorrowSummaryPage from './pages/BorrowSummaryPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-grow ">
            <Routes>
              <Route path="/" element={<BooksPage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/add-book" element={<AddBookPage />} />
              <Route path="/edit-book/:id" element={<EditBookPage />} />
              <Route path="/borrow/:bookId" element={<BorrowPage />} />
              <Route path="/borrow-summary" element={<BorrowSummaryPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;