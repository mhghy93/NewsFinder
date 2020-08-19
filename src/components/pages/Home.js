import React, { useContext } from "react";
import News from "../news/News";
import NewsHeadlines from "../news/NewsHeadlines";
import NewsContext from "../../context/news/NewsContext";

const Home = () => {
  const newsContext = useContext(NewsContext);

  const { searching } = newsContext;

  return <div>{searching ? <News /> : <NewsHeadlines />}</div>;
};

export default Home;
