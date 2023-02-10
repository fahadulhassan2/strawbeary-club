import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import AnimatedCursor from "react-animated-cursor"
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
  <Provider store={store}>
    <Router>
    {/* <AnimatedCursor 
     innerSize={8}
     outerSize={15}
     color='242, 75, 153'
     outerAlpha={0.2}
     innerScale={0.7}
     outerScale={5}
    /> */}
    <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
