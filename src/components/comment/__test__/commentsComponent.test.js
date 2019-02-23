import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

import Comment from "../commentsHere";
import { initialState } from "../../../redux/reducers/commentReducer";

Enzyme.configure({ adapter: new Adapter() });
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const shallowWithStore = (component, store) => {
  const context = {
    store
  };
  return shallow(component, { context });
};

const fakeComment = {
  author_profile: {
    First_name: "Malani",
    Last_name: "Wachira",
    bio: "Am a software developer",
    company: "Andela",
    created_at: "2019-02-21T15:40:59.667893Z",
    following: false,
    image: "https://res.cloudinary.com/dxecwuaqd/image/upload/v1550764707/mascot_16_re1khd",
    location: "Kenya",
    updated_at: "2019-02-21T15:58:31.008946Z",
    username: "Malani"
  },
  body: "fake coment body",
  id: 28
};

describe("<Comment />", () => {
  it("render all expected bits of a comment", () => {
    const component = shallow(<Comment comment={fakeComment} />);
    expect(component).toMatchSnapshot();
  });
});

describe("<Comment />", () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Comment comment={fakeComment} />
        </MemoryRouter>
      </Provider>
    );
  });

  it("renders without crashing", () => {
    shallowWithStore(<Comment comment={fakeComment} />, store);
  });
  it("renders the prof pic of the user", () => {
    const img = wrapper.find("commenter avatar");
    // eslint-disable-next-line no-unused-expressions
    expect(img).toBeTruthy;
  });
});
