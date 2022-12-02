
import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import rootReducers from "./reducer";
  const store = createStore(rootReducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  export default store;
  