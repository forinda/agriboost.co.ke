import useAuth from "@shared-hooks/useAuth";
import React from "react";
import { FaBars } from "react-icons/fa";

const AdminHeader = () => {
  const { auth } = useAuth();
  return (
    <div className="sticky top-0 w-full border-b py-4 px-4 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <FaBars />
          <div className="flex flex-col">
            <p className="text-gray-500">Agriboost</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <img
            src={auth.user?.avatar}
            alt=""
            className="h-12 w-12 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
