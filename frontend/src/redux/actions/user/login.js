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
    // const state = getState();

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
        const { status, data } = response;
        dispatch(toastrActions.remove("logging_in"));
        dispatch(
          toastrActions.add({
            id: "logging_in_success", // If not provided we will add one.
            type: "success",
            title: "Login",
            position: "top-right", // This will override the global props position.
            progressBar: false,
            attention: true, // This will add a shadow like the confirm method.
            onAttentionClick: id => {}, //override default behavior of 'attention' background click.
            message: data.message,
            options: {
              timeOut: 0,
              transitionIn: "bounceIn",
              transitionOut: "bounceOut"
            }
          })
        );
        setInterval(() => dispatch(shouldUserLogin(data.token)), 2000);
      })
      .catch(err => {
        const { data } = err.response;
        dispatch(toastrActions.remove("logging_in"));
        dispatch(
          toastrActions.add({
            id: "logging_in_error", // If not provided we will add one.
            type: "error",
            title: "Error",
            message: data.message,
            position: "top-right", // This will override the global props position.

            attention: true, // This will add a shadow like the confirm method.
            onAttentionClick: id => {}, //override default behavior of 'attention' background click.
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
