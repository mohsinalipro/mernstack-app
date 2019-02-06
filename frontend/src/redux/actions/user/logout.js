import { actions as toastrActions } from "react-redux-toastr";
import { USER_LOGOUT } from "./types";

export function shouldUserLogout() {
  return {
    type: USER_LOGOUT
  };
}

export default function userLogout(username, password) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.user.token) {
      dispatch(toastrActions.remove("logging_in_error"));
      dispatch(
        toastrActions.add({
          id: "logging_out",
          type: "success",
          title: "Logout",
          message: "You have been logged out sucessfully",
          position: "top-right",
          attention: true,
          options: {}
        })
      );

      setTimeout(() => dispatch(shouldUserLogout()), 1000);
    }
  };
}
