import React, { Component } from "react";
import Main from './components/MainComponent';
import './App.css';
import axios from "axios";

import { BrowserRouter } from 'react-router-dom';
import Config from '../src/Config/index.json'
// // let URL;
// // if (window.location.hostname === "localhost") {
// //   URL = `${Config.LocalURL}/`;
// // } else {
// //   URL = `${Config.ServerURL}/`;
// // }
// axios.defaults.baseURL = URL;
// axios.defaults.headers.common["Content-Type"] = "application/json";
// axios.defaults.withCredentials = true;
class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
