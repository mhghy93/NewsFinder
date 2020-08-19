import {
  SEARCH_NEWS,
  GET_NEWS_HEADLINES,
  CLEAR_NEWS,
  SET_SEARCHING,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
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
    case CLEAR_NEWS:
      return {
        ...state,
        news: [],
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
