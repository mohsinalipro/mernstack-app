import React from "react";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";

export default ChildComponent => {
  class requireAuth extends React.Component {
    componentWillMount() {
      const token = this.props.user.token;
      if (!token) {
        toastr.warning("Unauthorized Access", "Please login first!", {
          position: "top-right"
        });
      }
      this.shouldNavigate();
    }
    componentDidUpdate() {
      this.shouldNavigate();
    }
    shouldNavigate = () => {
      const token = this.props.user.token;
      if (!token) {
        this.props.history.push("/login");
      }
    };
    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  return connect(mapStateToProps)(requireAuth);
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}
