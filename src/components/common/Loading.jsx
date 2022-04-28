import React from "react";
import { Spinner } from "../../components";

export default function Loading() {
  return (
    <div className="flex flex-col space-y-2 text-gray-500 items-center justify-center">
      <Spinner className=" animate-spin" />
      <p className="animate-pulse">please wait ...</p>
    </div>
  );
}
