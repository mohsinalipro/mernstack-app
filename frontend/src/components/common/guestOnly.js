import React from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class guestOnly extends React.Component {
    componentWillMount() {
      this.shouldNavigate();
    }
    componentDidUpdate() {
      this.shouldNavigate();
    }

    shouldNavigate = () => {
      const token = this.props.user.token;
      if (token) {
        this.props.history.push("/");
      }
    };

    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  return connect(mapStateToProps)(guestOnly);
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}
