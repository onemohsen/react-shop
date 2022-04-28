import { Component } from "react";
import { Route, Routes } from "react-router";
import { Home, Products, NotFound } from "../components/index";

export default class Routers extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          />
        </Routes>
      </>
    );
  }
}
