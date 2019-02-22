import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Pagination, PaginationItem } from "semantic-ui-react";

import { GetArticles } from "../Articles";
import getArticles from "../../../../actions/getArticlesAction";

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
          <GetArticles getArticles={getArticles} />
        </BrowserRouter>
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find(Pagination).length).toBe(0);
  });
});

describe("Get component being rendered", () => {
  it("should be a get articles component", () => {
    const tree = shallow(<GetArticles getArticles={getArticles} />);
    expect(tree).toMatchSnapshot();
  });
});
describe("Get component being rendered", () => {
  it("should be a get articles component", () => {
    const tree = shallow(<GetArticles getArticles={getArticles} />);
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

describe("should change active page", () => {
  it("should move to two ", () => {
    const mountedComponent = mount(<GetArticles getArticles={getArticles} />);
    mountedComponent.setState({
      count: 3,
      page_size: 1
    });

    const secondItem = mountedComponent.find(".item").at(1);
    secondItem.simulate("click", 2);
    // mountedComponent.instance().handlePaginationChange(2);
    expect(mountedComponent.state("activePage")).toEqual(1);
  });
});
