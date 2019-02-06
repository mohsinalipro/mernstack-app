import {
  USER_LOGIN,
  USER_SIGNUP,
  USER_LOGOUT,
  USER_RETRIVE_INFO
} from "../actions/user/types";
import {
  saveToken,
  retriveToken,
  deleteToken
} from "../../helpers/localStorageToken";

const initialState = {
  token: retriveToken(),
  name: "",
  email: "",
  username: ""
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case USER_LOGIN:
      saveToken(action.payload); // localStorage
      return { ...state, token: action.payload };

    case USER_SIGNUP:
      console.log(action);
      saveToken(action.payload); // localStorage
      return { ...state, token: action.payload };

    case USER_LOGOUT:
      deleteToken(); // localStorage
      return { ...state, token: null };

    case USER_RETRIVE_INFO:
      return state;

    default:
      return state;
  }
};
