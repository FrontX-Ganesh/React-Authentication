/* eslint-disable react/prop-types */
import { Component } from "react";
import ServiceDown from "./ServiceDown";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return <ServiceDown />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
