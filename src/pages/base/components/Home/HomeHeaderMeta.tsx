import WidthWrap from "@shared-comps/WidthWrap";
import useAuth from "@shared-hooks/useAuth";
import Hr from "@shop-pages/components/Hr";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPhone,
} from "react-icons/fa";
import { TfiTimer, TfiMobile } from "react-icons/tfi";
import { Link } from "react-router-dom";

type SocialIcon = {
  Icon: any;
  link?: string;
  color?: string;
};

const icons: SocialIcon[] = [
  { Icon: FaFacebook, color: "blue", link: "https://facebook.com" },
  { Icon: FaInstagram, color: "brown", link: "https://instagram.com" },
  { Icon: FaLinkedin, color: "blue", link: "https://linkedin.com" },
  { Icon: FaTwitter, color: "blue", link: "https://twitter.com" },
  {
    Icon: FaYoutube,
    color: "red",
    link: " https://youtube.com",
  },
];

type ServicesProps = {
  id: number;
  title: string;
  link: string;
};

const services: ServicesProps[] = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Shop", link: "/shop" },
  { id: 3, title: "Social", link: "/social" },
  { id: 4, title: "Contact", link: "/contact" },
];

const HomeHeaderMeta = () => {
  const {
    auth: { user, isAuthenticated },
    dispatch,
  } = useAuth();
  return (
    <div className="sticky top-0 z-[2000] border-b bg-neutral-100 text-neutral-600 shadow-lg font-rubik">
      <WidthWrap>
        <div className="flex items-center justify-between py-8">
          <div className="flex items-center gap-5">
            <img src="/logo512.png" alt="" className="h-10 w-10 object-cover" />
            <span className="text-xl uppercase font-extrabold">Agriboost</span>
          </div>
          <div>
            <ul className="flex items-center gap-5 text-xl uppercase">
              {services.map((service) => (
                <li key={service.id}>
                  <Link to={service.link} className="font-semibold">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {isAuthenticated ? (
            <div>
              <div className="flex items-center gap-4 relative group">
                <div className="text-sm font-semibold flex items-center gap-4">
                  <span>{user?.username}</span>
                  <img
                    src={user?.avatar}
                    className="h-10 w-10 object-cover rounded-full"
                  />
                  <div className="hidden group-hover:block absolute p-4 bg-white right-0 min-[200px] w-fit top-10 rounded-lg">
                    {[
                      {
                        title: "Profile",
                        link: "/profile",
                      },
                      {
                        title: "Settings",
                        link: "/settings",
                      },
                    ].map((item, index) => (
                      <Link
                        to={item.link}
                        key={index}
                        className="text-md font-semibold flex items-center gap-4 py-1 px-2"
                      >
                        <span>{item.title}</span>
                      </Link>
                    ))}
                    <Hr />
                    <button
                      className="border w-full bg-gray-200 text-xl px-4 py-1 rounded-md"
                      onClick={() => {
                        dispatch({ type: "logout-success", payload: null });
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              {[
                {
                  title: "Sign In",
                  link: "/login",
                },
                {
                  title: "Sign Up",
                  link: "/register",
                },
              ].map((item, index) => (
                <Link
                  to={item.link}
                  key={index}
                  className="text-sm font-semibold flex items-center gap-4"
                >
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </WidthWrap>
    </div>
  );
};

export default HomeHeaderMeta;
