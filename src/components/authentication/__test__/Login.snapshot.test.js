import { shallow, configure } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";

import Login from "../Login";

configure({ adapter: new Adapter() });

describe("Login component being rendered", () => {
  it("should be a login component", () => {
    const tree = shallow(
      <Login />
    );
    expect(tree).toMatchSnapshot();
  });
});
