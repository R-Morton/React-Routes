import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { ArticlePage } from './pages/ArticlesPage';
import { WatchPage } from './pages/WatchPage';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/contact" element={<ContactPage />} />
        <Route path="/articles/:id/media/:photoId" element={<ArticlePage />} />
        <Route path="/watch" element={<WatchPage />} />
      </Routes>

      <h6>Footer goes here</h6>
    </div>
  );
}

export default App;
