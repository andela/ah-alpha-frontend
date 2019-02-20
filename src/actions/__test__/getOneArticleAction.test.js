import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { GET_ONE_ARTICLE_ERROR } from "../types";
import getOneArticle from "../getOneArticleAction";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

configure({ adapter: new Adapter() });

describe("actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("get all articles actions", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404
      });
    });

    let expectedActions = { type: GET_ONE_ARTICLE_ERROR };

    const store = mockStore({});
    return store.dispatch(getOneArticle("lorem-ipsum")).then(() => {
      const dispathedActions = store.getActions();

      expect(dispathedActions).toContainEqual(expectedActions);
    });
  });
});
