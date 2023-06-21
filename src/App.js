import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Book from './pages/Book';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Book />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="*" element={<Book />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
