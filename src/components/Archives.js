
import React from 'react';
import '../Styles/Archives.css'; // Assuming you create a corresponding CSS file for styling

const ArchivesPage = () => {
  return (
    <div className="archives-page">
      <h2>Archives</h2>
      <p>This is the archives page where past articles and news can be found.</p>
      {/* Here you might map over an array of archive entries or fetch them from an API */}
    </div>
  );
};

export default ArchivesPage;
