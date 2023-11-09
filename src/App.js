import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ArchivesPage from './components/Archives';
import ContactPage from './components/ContactUs';
import './App.css';

// Simple Home component as a placeholder
const HomePage = () => {
  return <div>Home Page</div>;
};

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Updated this line */}
          <Route path="/archives" element={<ArchivesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
