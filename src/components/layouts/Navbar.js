import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NewsContext from "../../context/news/NewsContext";

const Navbar = () => {
  const newsContext = useContext(NewsContext);

  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    newsContext.searchNews(text);
    console.log(text);
    setText("");
  };

  return (
    <nav style={{ marginBottom: "30px" }} className="purple darken-4">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo center">
          <span
            className="material-icons center"
            style={{ marginRight: "10px" }}
          >
            grid_on
          </span>
          NewsFinder
        </Link>
        <form onSubmit={onSubmit}>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search news..."
              value={text}
              onChange={onChange}
              required
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
