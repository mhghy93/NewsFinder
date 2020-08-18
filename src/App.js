import React, { Fragment, useEffect } from "react";
import Navbar from "./components/layouts/Navbar";
import "./App.css";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    // Init MaterialJs
    M.AutoInit();
  });

  return (
    <Fragment>
      <Navbar />
    </Fragment>
  );
};

export default App;
