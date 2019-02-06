import React from "react";
import { retriveToken } from "../../helpers/localStorageToken";

export default (ChildComponent, guestOnly = false) => {
  return class extends React.Component {
    componentWillMount() {
      const token = retriveToken();
      if (guestOnly && token) {
        this.props.history.push("/");
      } else if (!token) {
        this.props.history.push("/login");
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  };
};
