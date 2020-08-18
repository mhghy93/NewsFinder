import React from "react";

const Navbar = () => {
  return (
    <nav style={{ marginBottom: "30px" }} className="purple darken-4">
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo center">
          NewsFinder
        </a>
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search news..."
              required
            />
            <label className="label-icon" for="search">
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
