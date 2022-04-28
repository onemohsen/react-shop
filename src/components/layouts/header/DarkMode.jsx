import React, { Component } from "react";
import { Night } from "../../../components";

class DarkMode extends Component {
  constructor({ toggle = false }) {
    super();
    this.state = {
      toggle: toggle,
    };
  }
  render() {
    return (
      <div>
        <div className="flex items-center justify-center">
          <div className="mr-1 text-sm" title="Dark Mode">
            {!this.state.toggle && (
              <Night
                className="cursor-pointer text-gray-400"
                onClick={() => {
                  this.setState({ toggle: !this.state.toggle });
                  this.props.onClick();
                }}
              />
            )}
          </div>
          <div
            className={`relative w-12 h-6 transition duration-200 ease-linear rounded-full ${
              this.state.toggle ? "bg-gray-500" : "bg-gray-300"
            }`}
          >
            <label
              htmlFor="toggle"
              className={`absolute  left-0  w-6  h-6  transition  duration-100  ease-linear  transform  bg-gray-100  rounded-full  cursor-pointer ${
                this.state.toggle
                  ? "translate-x-full border border-green-400 "
                  : "translate-x-0  border border-gray-400"
              }`}
            ></label>
            <input
              title="Dark Mode"
              type="checkbox"
              id="toggle"
              name="toggle"
              value={this.state.toggle}
              onClick={() => {
                this.setState({ toggle: !this.state.toggle });
                this.props.onClick();
              }}
              className="w-full h-full appearance-none focus:outline-none"
            />
          </div>
          <div className="ml-1 text-sm" title="Dark Mode">
            {this.state.toggle && (
              <Night
                className="text-gray-500 cursor-pointer"
                fill={true}
                onClick={() => {
                  this.setState({ toggle: !this.state.toggle });
                  this.props.onClick();
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default DarkMode;
