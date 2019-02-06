import { actions as toastrActions } from "react-redux-toastr";
import axios from "axios";
import { USER_SIGNUP } from "./types";
import apiRoutes from "../../../api/routes";

export function shouldSignUp(token) {
  return {
    type: USER_SIGNUP,
    payload: token
  };
}

export default function userSignup(name, email, username, password) {
  return (dispatch, getState) => {
    const data = {
      name,
      email,
      username,
      password
    };

    dispatch(toastrActions.remove("signing_up_error"));
    dispatch(
      toastrActions.add({
        id: "signing_up",
        type: "info",
        title: "Signing Up",
        message: "Please wait...",
        position: "top-right",
        attention: true,
        options: { closeOnToastrClick: false }
      })
    );
    axios
      .post(apiRoutes.user.signup, data)
      .then(response => {
        const { data } = response;
        dispatch(toastrActions.remove("signing_up"));
        dispatch(
          toastrActions.add({
            id: "signing_up_success",
            type: "success",
            title: "Signup",
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
        dispatch(shouldSignUp(data.data.token));
      })
      .catch(err => {
        const { data } = err.response;
        dispatch(toastrActions.remove("signing_up"));
        dispatch(
          toastrActions.add({
            id: "signing_up_error",
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
