import { configure } from "enzyme";
import moxios from "moxios";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { deleteArticle } from "../articles/deleteArticleActions";

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

  it("delete article", async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404
      });
    });

    const store = mockStore({});
    const dispatchedResults = await store.dispatch(deleteArticle("some-article"));
    expect(dispatchedResults).toBeUndefined();
  });
});
