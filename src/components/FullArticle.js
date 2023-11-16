// In FullArticle.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/FullArticle.css';

const FullArticle = () => {
  const { articleId } = useParams();

  const articleContent = {
    title: "Rangers accounts published but accountants wait for review from “Celtic fan experts” before coming to final conclusion",
    body: `Rangers have released their annual accounts, with the Ibrox club showing an operating profit of £252,000 for the past financial year. However, if recent years are anything to go by, no real conclusions can be drawn until the numbers are crunched by their neighbours across the city.\n\nLeading expert in Rangers’ finances, Paul The Tim, has stated:\n\n“I’ve not had an opportunity to have a proper look through the numbers yet, but I guarantee you that things are worse at Ibrox than they seem - they are skint Hail Hail.”\n\nThis means that Rangers’ accountants and fans will have to hold their breath for now.\n\nWhen interviewed by Saltire Sport, a lead accountant at Rangers said the following,\n\n“Things are looking positive, we had a lot of expenses to pay this year but due to factors such as our money from the Champions League we’ve managed to turn a profit. But I’m not getting too excited yet because I’m sure the experts from Kerrydale Street will have found other expenses that we’ve forgotten about.”`
  };

  const paragraphs = articleContent.body.split('\n\n').map((paragraph, idx) => (
    <p key={idx}>{paragraph}</p>
  ));

  return (
    <div className="full-article">
      <h1 className="full-article-title">{articleContent.title}</h1>
      {paragraphs}
    </div>
  );
};

export default FullArticle;
