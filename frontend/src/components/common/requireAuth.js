import React from "react";
import { retriveToken } from "../../helpers/localStorageToken";

export default ChildComponent => {
  return class extends React.Component {
    componentWillMount() {
      const token = retriveToken();
      if (!token) {
        this.props.history.push("/login");
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  };
};
