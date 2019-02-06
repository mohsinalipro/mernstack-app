import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export const getState = store.getState();

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
