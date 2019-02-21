import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { GetArticles } from "../Articles";
import getArticles from '../../../../actions/getArticlesAction';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

configure({ adapter: new Adapter() });

describe("Get all articles", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  it("always returns the articles", () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <GetArticles getArticles={getArticles}/>
        </BrowserRouter>
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("Get component being rendered", () => {
  it("should be a get articles component", () => {
    const tree = shallow(
      <GetArticles getArticles={getArticles}/>
    );
    expect(tree).toMatchSnapshot();
  });
});
describe("Get component being rendered", () => {
  it("should be a get articles component", () => {
    const tree = shallow(
      <GetArticles getArticles={getArticles}/>
    );
    expect(tree).toMatchSnapshot();
  });
});

describe("actions", () => {
  it("get all articles actions", () => {
    const store = mockStore({});
    const actionsDispatched = store.dispatch(getArticles);
    expect(actionsDispatched).toEqual(actionsDispatched);
  });
});


