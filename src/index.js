import React from "react";
import ReactDOM from "react-dom";
import App from "./Containers/appContainer";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
