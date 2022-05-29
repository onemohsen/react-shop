import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Api, Loading } from "../../../components";

export default function Index() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const responseProducts = await Api.get(
        "https://fakestoreapi.com/products"
      );
      setProducts(responseProducts);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="">
      <Link to="create">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          + New Product
        </button>
      </Link>
      {loading && <Loading />}

      {!loading && (
        <div className="relative overflow-x-scroll shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>

                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {product.title}
                  </th>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
