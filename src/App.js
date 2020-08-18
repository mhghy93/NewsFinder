import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import "./App.css";

import NewsState from "./context/news/NewsState";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    // Init MaterialJs
    M.AutoInit();
  });

  return (
    <NewsState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </NewsState>
  );
};

export default App;
