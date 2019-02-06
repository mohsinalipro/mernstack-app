import React from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class requireAuth extends React.Component {
    componentWillMount() {
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
