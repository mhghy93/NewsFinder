import {
  SEARCH_NEWS,
  GET_NEWS_HEADLINES,
  SET_SEARCHING,
  SET_LOADING,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_NEWS:
      return {
        ...state,
        news: action.payload,
        loading: false,
      };
    case GET_NEWS_HEADLINES:
      return {
        ...state,
        news: action.payload,
        loading: false,
      };
    case SET_SEARCHING:
      return {
        ...state,
        searching: true,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
