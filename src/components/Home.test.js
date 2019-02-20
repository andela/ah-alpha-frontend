import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Home from "./Home";
import store from '../redux/store/index';

it("launches the welcome page", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Home />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
