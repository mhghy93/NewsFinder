import React from "react";

const NewsItem = ({ article }) => {
  return (
    <div className="col s6">
      <div className="card">
        <div className="card-image">
          <img src={article.urlToImage} alt={article.title} />
        </div>
        <div className="card-content">
          <span className="card-title">{article.title}</span>
          <p>{article.content}</p>
        </div>
        <div className="card-action">
          <a href={article.url}>Source</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
