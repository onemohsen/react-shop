import { Component } from "react";
import { Link } from "react-router-dom";
import { IconMenu, IconClose, DarkMode,Search } from "../../components";

export default class Navbar extends Component {
  constructor(props) {
    super();
    this.state = {
      menus: [
        { title: "Home", link: "/" },
        { title: "Products", link: "/products" },
      ],
      showMenu: false,
      darkMode: false,
    };
  }

  callDarkmode = async () => {
    await this.setState({ darkMode: !this.state.darkMode });
    this.state.darkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  };

  render() {
    return (
      <nav className="bg-gray-100 border-gray-200 p-5 rounded dark:bg-gray-800">
        <div className=" flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Store
            </span>
          </Link>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => this.setState({ showMenu: !this.state.showMenu })}
          >
            <span className="sr-only">Open main menu</span>
            <IconMenu
              className={`${!this.state.showMenu ? "" : "hidden"} w-6 h-6`}
            />
            <IconClose
              className={`${this.state.showMenu ? "" : "hidden"} w-6 h-6`}
            />
          </button>
          <Search />
          <div
            className={`${
              this.state.showMenu ? "" : "hidden"
            } w-full md:block md:w-auto`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              {this.state.menus.map((item) => {
                return (
                  <li key={item.link}>
                    <Link
                      to={item.link}
                      className="block py-2 pr-4 pl-3 text-lg text-gray-500 md:p-0 dark:text-white hover:text-blue-700"
                      aria-current="page"
                      onClick={() => this.setState({ showMenu: false })}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
              <DarkMode
                toggle={this.state.darkMode}
                onClick={() => {
                  this.callDarkmode();
                }}
              />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
