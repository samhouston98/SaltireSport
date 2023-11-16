
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/ArticlePreview.css';

const ArticlePreview = ({ id, title, image }) => {
  const navigate = useNavigate();

  const navigateToFullArticle = () => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="article-preview" onClick={navigateToFullArticle}>
      <div className="article-content">
        <img src={image} alt={title} className="article-image" />
        <h3 className="preview-title">{title}</h3>
      </div>
    </div>
  );
};

export default ArticlePreview;
