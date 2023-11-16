
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ArchivesPage from './components/Archives';
import ContactPage from './components/ContactUs';
import FullArticle from './components/FullArticle';
import './App.css'; // Ensure this file exists with appropriate styles

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:articleId" element={<FullArticle />} /> {/* New route */}
          {/* ... other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
