import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import RouterComp from "./Router";
import {Provider} from "react-redux"
import store from "./utils/redux-store/store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./utils/styles/Style.css"
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function App() {
  AOS.init();
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <RouterComp />
      </Router>
      </Provider>
    </div>
  );
}

export default App;
