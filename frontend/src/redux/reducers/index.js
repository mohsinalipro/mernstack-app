import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import userReducer from "./userReducer";

export default combineReducers({
  user: userReducer,
  toastr: toastrReducer
});
