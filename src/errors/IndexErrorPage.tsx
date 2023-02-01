import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const IndexErrorPage = () => {
  const error = useRouteError() as any;
  const navigate = useNavigate();
  console.log({ error });

  return (
    <div className="flex justify-center min-h-screen w-full items-center bg-gray-300">
      <div className="flex flex-col gap-4 p-10 bg-white rounded-md shadow-md">
        <pre className="text-center font-bold text-4xl">
          {error.status ?? 500}
        </pre>
        <pre className="text-center text-2xl text-red-500">
          {error.statusText ?? "An error occured"}
        </pre>
        <button
          onClick={(e) => {
            navigate(-1);
          }}
          className="text-blue-500"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default IndexErrorPage;
