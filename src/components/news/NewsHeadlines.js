import React, { useContext, useEffect } from "react";
import NewsItem from "./NewsItem";
import NewsContext from "../../context/news/NewsContext";

const NewsHeadlines = () => {
  useEffect(() => {
    newsContext.getNewsHeadlines();
    // eslint-disable-next-line
  }, []);

  const newsContext = useContext(NewsContext);

  const { news } = newsContext;

  return (
    <div className="row">
      {news.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsHeadlines;
