import { actions as toastrActions } from "react-redux-toastr";
import axios from "axios";
import { USER_LOGIN } from "./types";
import apiRoutes from "../../../api/routes";

export function shouldUserLogin(token) {
  return {
    type: USER_LOGIN,
    payload: token
  };
}

export default function userLogin(username, password) {
  return (dispatch, getState) => {
    const data = {
      username,
      password
    };

    dispatch(toastrActions.remove("logging_in_error"));
    dispatch(
      toastrActions.add({
        id: "logging_in",
        type: "info",
        title: "Logging In",
        message: "Please wait...",
        position: "top-right",
        attention: true,
        options: { closeOnToastrClick: false }
      })
    );
    axios
      .post(apiRoutes.user.login, data)
      .then(response => {
        const { data } = response;
        dispatch(toastrActions.remove("logging_in"));
        dispatch(
          toastrActions.add({
            id: "logging_in_success",
            type: "success",
            title: "Login",
            position: "top-right",
            progressBar: false,
            attention: true,
            onAttentionClick: id => {},
            message: data.message,
            options: {
              transitionIn: "bounceIn",
              transitionOut: "bounceOut"
            }
          })
        );
        dispatch(shouldUserLogin(data.data.token));
      })
      .catch(err => {
        const { data } = err.response;
        dispatch(toastrActions.remove("logging_in"));
        dispatch(
          toastrActions.add({
            id: "logging_in_error",
            type: "error",
            title: "Error",
            message: data.message,
            position: "top-right",

            attention: true,
            onAttentionClick: id => {},
            options: {
              progressBar: false,
              timeOut: 0,
              transitionIn: "bounceIn",
              transitionOut: "bounceOut"
            }
          })
        );
      });
  };
}
