/* eslint-disable no-undef */
import { shallow, configure, mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import Adapter from "enzyme-adapter-react-16";
import CreateForm from "../createArticalForm";

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Create article Form being rendered", () => {
  it("should be a form", () => {
    const tree = shallow(<CreateForm />);
    expect(tree).toMatchSnapshot();
  });
});

describe("render the component and check if all items exist", () => {
  const store = mockStore({ store: {} });
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <CreateForm />
      </BrowserRouter>
    </Provider>
  );

  it("Should render all child elements correctly", () => {
    expect(wrapper.find(".container").exists()).toBe(true);
    expect(wrapper.find(".grid").exists()).toBe(true);
    expect(wrapper.find(".form").exists()).toBe(true);
    expect(wrapper.find(".input").exists()).toBe(true);
    expect(wrapper.find("label").exists()).toBe(true);
    expect(wrapper.find(".button").exists()).toBe(true);
    expect(wrapper.find("div").exists()).toBe(true);
  });
  it("Should simulate click", () => {
    const submitButton = wrapper.find("button");
    submitButton.simulate("click");
  });
});
