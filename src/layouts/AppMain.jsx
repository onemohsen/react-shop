import { Component } from "react";
import { Header, Footer } from "../components/index.js";

export default class AppMain extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="container mx-auto px-4 md:px-0 h-screen flex flex-col justify-between">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
