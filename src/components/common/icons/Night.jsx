import React, { Component } from "react";

class Night extends Component {
  constructor({ fill = false, className = "" }) {
    super();
    this.state = {
      fill: fill,
      className,
    };
  }
  render() {
    return this.state.fill ? (
      <div onClick={this.props.onClick} className={this.state.className}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className="iconify iconify--ic"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M14 2c1.82 0 3.53.5 5 1.35c-2.99 1.73-5 4.95-5 8.65s2.01 6.92 5 8.65A9.973 9.973 0 0 1 14 22C8.48 22 4 17.52 4 12S8.48 2 14 2z"
          ></path>
        </svg>
      </div>
    ) : (
      <div onClick={this.props.onClick} className={this.state.className}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className="iconify iconify--ic"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          onClick={this.props.onClick}
        >
          <path
            fill="currentColor"
            d="M14 4c.34 0 .68.02 1.01.07C13.1 6.23 12 9.05 12 12s1.1 5.77 3.01 7.93c-.33.05-.67.07-1.01.07c-4.41 0-8-3.59-8-8s3.59-8 8-8m0-2C8.48 2 4 6.48 4 12s4.48 10 10 10c1.82 0 3.53-.5 5-1.35c-2.99-1.73-5-4.95-5-8.65s2.01-6.92 5-8.65A9.973 9.973 0 0 0 14 2z"
          ></path>
        </svg>
      </div>
    );
  }
}

export default Night;
