import { Component } from "react";
import { IconGithub } from "../../components";

export default class Footer extends Component {
  render() {
    return (
      <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022 . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://github.com/onemohsen"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <IconGithub />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
