import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center flex-col gap-2 h-screen">
      <h1 className="text-lg font-semibold">PAGE NOT FOUND</h1>
      <p className="text-sm text-gray-500">
        The page you are looking for does not exist
      </p>
      <h1 className="text-xl font-bold">404</h1>
      <Link to="/" className="text-blue-500 py-2 px-4 bg-gray-300 rounded-lg">
        Home
      </Link>
    </div>
  );
}

export default ErrorPage;
