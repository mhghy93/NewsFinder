import React from "react";

const NewsItem = ({ article }) => {
  return (
    <div className="col s12">
      <div className="card">
        <div className="card-image">
          <img src={article.urlToImage} alt={article.title} />
        </div>
        <div className="card-content">
          <span className="card-title">{article.title}</span>
          <p>{article.content}</p>
          <br />
          <p className="left">{article.author}</p>
          <p className="right">
            {new Intl.DateTimeFormat("en-US").format(
              new Date(article.publishedAt)
            )}
          </p>
        </div>
        <div className="card-action">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
