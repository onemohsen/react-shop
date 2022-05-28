import React from "react";
import { Link, Outlet } from "react-router-dom";
import { IconDashboard, IconProduct } from "../../components";

export default function Index() {
  return (
    <div className="flex ">
      <aside className="w-48" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
          <ul className="space-y-2">
            <Link to={"/admin/dashboard"}>
              <li>
                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <IconDashboard />
                  <span className="ml-3">Dashboard</span>
                </div>
              </li>
            </Link>
            <Link to={"/admin/products"}>
              <li>
                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <IconProduct />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Products
                  </span>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </aside>
      <div className="py-5 px-5 w-100 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
