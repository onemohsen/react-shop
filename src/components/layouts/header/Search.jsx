import React, { useEffect, useState } from "react";
import IconSearch from "../../common/icons/IconSearch";
import { Api, Loading } from "../../../components";
import useComponentVisible from "../../../hooks/useComponentVisible";
import { Link } from "react-router-dom";

export default function Search() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  useEffect(() => {
    (async () => {
      setIsComponentVisible(true);
      if (search.length <= 2) return;
      setLoading(true);
      const responseProducts = await Api.get(
        "https://fakestoreapi.com/products"
      );
      const filterProduct = responseProducts.filter(
        (product) =>
          product.title.toLowerCase().indexOf(search.toLowerCase()) >= 0
      );
      await setProducts(filterProduct);
      setLoading(false);
    })();
  }, [search, setIsComponentVisible]);

  return (
    <form ref={ref}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Search
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <IconSearch />
        </div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search ( 3 letters to start ) ..."
          required
        />

        <div className="absolute z-10 w-full">
          {loading && isComponentVisible && <Loading />}

          {!loading && isComponentVisible && (
            <ul className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
              {products.map((product) => {
                return (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className=""
                    onClick={() => setIsComponentVisible(false)}
                  >
                    <li className="cursor-pointer p-3 hover:bg-slate-50">
                      {product.title}
                    </li>
                  </Link>
                );
              })}
              {search && !loading && products.length === 0 && (
                <li className="cursor-pointer text-gray-400 text-center p-3 hover:bg-slate-50 w-full">
                  Not Found
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </form>
  );
}
