import React, { useReducer } from "react";
import axios from "axios";
import NewsContext from "./NewsContext";
import NewsReducer from "./NewsReducer";
import {
  SEARCH_NEWS,
  GET_NEWS_HEADLINES,
  CLEAR_NEWS,
  SET_SEARCHING,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";

const NewsState = (props) => {
  const initialState = {
    news: [],
    loading: false,
    searching: false,
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  // Search Users
  const searchNews = async (text) => {
    setSearching();
    setLoading();

    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=${text}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );

    dispatch({ type: SEARCH_NEWS, payload: res.data.articles });
  };

  // Get News Headlines
  const getNewsHeadlines = async () => {
    setLoading();

    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );

    dispatch({ type: GET_NEWS_HEADLINES, payload: res.data.articles });
  };

  // Clear News
  const clearNews = () => dispatch({ type: CLEAR_NEWS });

  // Set Loading
  const setSearching = () => dispatch({ type: SET_SEARCHING });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <NewsContext.Provider
      value={{
        news: state.news,
        loading: state.loading,
        searchNews,
        getNewsHeadlines,
        clearNews,
        setSearching,
        setLoading,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
