import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
ReactDom.createRoot(document.querySelector("#root")).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
