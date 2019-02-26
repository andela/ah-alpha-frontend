import { configure } from "enzyme";
import moxios from "moxios";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import getArticles from "../getArticlesAction";

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
        status: 200
      });
    });

    const store = mockStore({});
    return store.dispatch(getArticles()).then(() => {
      const dispathedActions = store.getActions();

      expect(dispathedActions).toContainEqual(
        { isLoading: true, type: "GET_ARTICLES_REQUEST" }
      );
    });
  });
});
