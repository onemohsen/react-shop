import React, { useEffect } from "react";
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
      {loading && <Loading />}

      {!loading && (
        <div class="relative overflow-x-scroll shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Product name
                </th>

                <th scope="col" class="px-6 py-3">
                  Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {product.title}
                  </th>
                  <td class="px-6 py-4">{product.category}</td>
                  <td class="px-6 py-4">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
