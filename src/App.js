import React from 'react';
import Header from './components/Header'; // Make sure the path is correct based on your project structure
import './App.css'; // Your main App CSS file

function App() {
  return (
    <div className="App">
      <Header title="Saltire Sport" />
      {/* Other components like NewsList or Footer can be included here */}
    </div>
  );
}

export default App;
