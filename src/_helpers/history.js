import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};
