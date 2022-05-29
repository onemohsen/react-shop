import { Component } from "react";
import { Route, Routes } from "react-router";
import {
  Home,
  Products,
  ProductId,
  NotFound,
  Admin,
  AdminDashboard,
  AdminProducts,
  AdminProductsCreate,
} from "../components/index";

export default class Routers extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/products/:id" element={<ProductId />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products/create" element={<AdminProductsCreate />} />
            <Route path="products" element={<AdminProducts />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          />
        </Routes>
      </>
    );
  }
}
