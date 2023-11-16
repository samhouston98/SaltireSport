import React from 'react';
import ArticlePreview from './ArticlePreview' 

const HomePage = () => {
  const articles = [
    { id: 1, title: 'Rangers accounts published. But accountants wait on review from “Celtic fan experts” before coming to final conclusion', image: '/PTT.png' },
    { id: 2, title: 'Article Title 2', image: '/path/to/image2.jpg' },

  ];

  return (
    <div>
      <h1>Saltire Sport</h1>
      {articles.map(article => (
        <ArticlePreview key={article.id} {...article} />
      ))}
    </div>
  );
};

export default HomePage;
