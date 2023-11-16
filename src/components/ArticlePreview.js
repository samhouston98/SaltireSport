// In ArticlePreview.js
import React from 'react';
import '../Styles/ArticlePreview.css'; // Ensure this import is correct

const ArticlePreview = ({ id, title, image }) => {
  return (
    <div className="article-preview">
      <div className="article-content">
        <img src={image} alt={title} className="article-image" />
        <h3 className="article-title">{title}</h3>
      </div>
    </div>
  );
};

export default ArticlePreview;
