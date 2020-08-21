import React, { useContext } from "react";
import NewsItem from "./NewsItem";
import Spinner from "../layouts/Spinner";
import NewsContext from "../../context/news/NewsContext";

const News = () => {
  const newsContext = useContext(NewsContext);

  const { news, loading } = newsContext;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="row">
      {news.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
};

export default News;
