import useAuth from "@shared-hooks/useAuth";
import React from "react";
import { FaCheck, FaCross } from "react-icons/fa";
import { FcGraduationCap } from "react-icons/fc";
import { GiBasket, GiGraduateCap, GiPencil, GiPerson, GiSettingsKnobs, GiShoppingBag } from "react-icons/gi";
import {
  TfiLayers,
  TfiPencil,
  TfiSettings,
  TfiShoppingCart,
  TfiUser,
} from "react-icons/tfi";
import { Link, Outlet } from "react-router-dom";

type AccountLink = {
  name: string;
  path: string;
  Icon: typeof TfiLayers;
};

const accountLinks: AccountLink[] = [
  {
    name: "Profile",
    path: "/profile",
    Icon: GiPerson,
  },
  {
    name: "Edit Profile",
    path: "edit",
    Icon: GiPencil,
  },
  {
    name: "Settings",
    path: "settings",
    Icon: GiSettingsKnobs,
  },
  {
    name: "Orders",
    path: "orders",
    Icon: GiBasket,
  },
  {
    name: "Wishlist",
    path: "wishlist",
    Icon: GiShoppingBag,
  },
  {
    name: "courses",
    path: "courses",
    Icon: GiGraduateCap,
  }
];

const Profile = () => {
  const {
    auth: { user },
  } = useAuth();
  return (
    <div className="w-screen bg-gradient-to-r from-indigo-300 via-purple-200 to-fuchsia-100 py-5 h-screen overflow-hidden">
      <div className="container mx-auto w-full flex h-full gap-4">
        {/* Sidebar */}
        <div className="flex flex-col gap-4 p-4 bg-neutral-50 bg-opacity-25 h-full rounded-2xl ">
          <div className="w-[250px]">
            <div className="flex items-center justify-center relative">
              <img
                src={user?.avatar}
                alt=""
                className="h-20 w-20 rounded-full shadow-md"
              />
              <div className="absolute ml-16">
                {user?.active ? (
                  <FaCheck className="text-2xl bg-green-800 p-1 text-white rounded-full" />
                ) : (
                  <FaCross className="text-2xl bg-red-800 p-1 text-white rounded-full" />
                )}
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-center py-2">
                {user?.username}
              </h1>
            </div>
          </div>
          <div className="flex justify-center">
            <pre className="py-1 px-4 rounded-full bg-red-100">
              <code>{user?.role}</code>
            </pre>
          </div>
          <hr className="border-none h-[1px] bg-neutral-300 rounded-xl" />
          <div className="flex flex-col gap-2">
            {accountLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="flex items-center gap-4 px-4 py-2 rounded-xl hover:bg-neutral-100"
              >
                <link.Icon className="h-6 w-6" />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className=" flex flex-col gap-4 w-3/4">
          <div className="p-2 bg-white w-full rounded-lg">
            <h1>Profile</h1>
          </div>
          <div className="h-full bg-white shadow-lg rounded-2xl overflow-scroll p-4 no-scrollbar">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
