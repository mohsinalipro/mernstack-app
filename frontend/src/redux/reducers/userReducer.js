import { USER_LOGIN, USER_SIGNUP, USER_LOGOUT } from "../actions/types";
import {
  saveToken,
  retriveToken,
  deleteToken
} from "../../helpers/localStorageToken";

const initialState = {
  token: null,
  name: "",
  email: "",
  username: ""
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case USER_LOGIN:
      return state;
    case USER_SIGNUP:
      return state;
    case USER_LOGOUT:
      return state;
  }
  return state;
};
