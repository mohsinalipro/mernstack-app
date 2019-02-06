import { actions as toastrActions } from "react-redux-toastr";
import axios from "axios";
import { USER_RETRIVE_INFO } from "./types";
import apiRoutes from "../../../api/routes";

export function shouldUserRetriveInfo(info) {
  return {
    type: USER_RETRIVE_INFO,
    payload: info
  };
}

export default function userRetriveInfo() {
  return (dispatch, getState) => {
    const { token } = getState().user;
    const data = {
      token
    };

    dispatch(toastrActions.remove("retriving_info_error"));
    dispatch(
      toastrActions.add({
        id: "retriving_info",
        type: "info",
        title: "Retriving Info",
        message: "Please wait...",
        position: "top-right",
        attention: true,
        options: { closeOnToastrClick: false }
      })
    );
    axios
      .post(apiRoutes.user.retriveInfo, data)
      .then(response => {
        const { data } = response;
        dispatch(toastrActions.remove("retriving_info"));
        dispatch(
          toastrActions.add({
            id: "retriving_info_success",
            type: "success",
            title: "Retrive Info",
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
        dispatch(shouldUserRetriveInfo(data.data));
      })
      .catch(err => {
        const { data } = err.response;
        dispatch(toastrActions.remove("retriving_info"));
        dispatch(
          toastrActions.add({
            id: "retriving_info_error",
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
