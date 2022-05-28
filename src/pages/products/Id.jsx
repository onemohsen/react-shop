import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api, Loading, Price, Tag } from "../../components";

export default function Id() {
  const { id } = useParams();
  const [item, setitem] = useState({});
  const [loading, setloading] = useState(false);
  useEffect(() => {
    (async () => {
      setloading(true);
      const item = await Api.get(`https://fakestoreapi.com/products/${id}`);
      setitem(item);
      setloading(false);
    })();
  }, [id]);

  return (
    <div className="my-10">
      {loading && <Loading />}
      {!loading && (
        <div className="py-10 px-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-center">
            <img
              className="items-center rounded-t-lg w-72"
              src={item.image}
              alt=""
            />
          </div>
          <div className="mt-5 p-5 space-y-5">
            <Tag title={item.category} className="bg-green-600" />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {item.description}
            </p>
            <Price price={item.price} />
          </div>
        </div>
      )}
    </div>
  );
}
