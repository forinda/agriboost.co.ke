import moment from "moment";
import React from "react";
import { BiPaperPlane } from "react-icons/bi";
import {
  FaCcDiscover,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,

} from "react-icons/fa";
import { Form, Link } from "react-router-dom";
import { footerPolicies, footerSocials } from "../data/footerdata";
import FooterColHeader from "./FooterColHeader";
import Hr from "./Hr";

const ShopFooter = () => {
  return (
    <div className="bg-primary min-h-[20vh] text-neutral-100">
      {/* Section 1 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-between py-10 capitalize gap-10 px-4">
        <div className="text-md md:text-2xl font-medium flex gap-4 items-center flex-1">
          <BiPaperPlane className="text-xl md:text-5xl" />
          <span>Subscribe to our newsletter</span>
        </div>

        <Form className="bg-neutral-200 text-primary p-1 rounded-lg flex items-center flex-1">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your email..."
            className="ring-0 border-none focus:ring-0 focus:border-none focus:outline-none px-2 bg-transparent flex-1"
          />
          <button className="px-4 py-2 bg-primary text-neutral-200 rounded-xl uppercase text-sm">
            Subscribe
          </button>
        </Form>
      </div>
      <Hr />
      {/* Section 2 */}
      <div className="container mx-auto py-10 px-4 grid grid-cols-1 gap-4 md:px-8 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-center">
        {/* Contact  */}
        <div className="">
          <FooterColHeader title="Contact" />
          <div className="flex items-center gap-2">
            <span>Phone:</span>
            <span>+254 745 364 713</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Email:</span>
            <span>
              <a href="mailto:forinda@agriboost.co.ke">
                forinda@agriboost.co.ke
              </a>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>Address:</span>
            <span>Agriboost, Nairobi, Kenya</span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-medium">Follow us</h3>
            <div className="flex items-center gap-2 py-2">
              {footerSocials.map(({ Icon, name, link }) => (
                <a
                  href={link ?? "#"}
                  key={name}
                  className="bg-neutral-600 p-2 rounded-full"
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Information */}
        <div>
          <FooterColHeader title="Information" />
          <div className="flex flex-col gap-2">
            {footerPolicies.map(({ name, link }) => (
              <Link to={link ?? "#"} key={name}>
                {name}
              </Link>
            ))}
          </div>
        </div>
        {/* Account  */}
        <div>
          <FooterColHeader title="Account" />
          <div className="flex flex-col gap-2">
            <Link to="/shop/login">Login</Link>
            <Link to="/shop/register">Register</Link>
            <Link to="/shop/cart">Cart</Link>
            <Link to="/shop/profile">Checkout</Link>
          </div>
        </div>

        {/* Quick links  */}
        <div>
          <FooterColHeader title="Quick links" />
          <div className="flex flex-col gap-2">
            <Link to="/shop">Home</Link>
            <Link to="/shop/products">Products</Link>
            <Link to="/shop/about">About</Link>
            <Link to="/shop/contact">Contact</Link>
          </div>
        </div>
        {/* App  */}
        <div>
          <FooterColHeader title="Our App" />
          <div className="flex flex-col gap-2">
            <p>
              Download our app to get the latest updates on our products and
              services...
            </p>
            {/* Playstore and appstore */}
            <div className="flex items-center gap-2">
              <a href="#">
                <img
                  src="/playstore.svg"
                  alt="playstore"
                  className="w-24 border h-10 object-cover bg-white rounded-lg"
                />
              </a>
              <a href="#">
                <img
                  src="/appstore.svg"
                  alt="appstore"
                  className="w-24 border h-10 object-cover bg-black px-1 rounded-lg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Hr />
      {/* Section 3 */}
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center px-4 py-5 justify-between">
        {/* Copyright */}
        <div className="flex items-center space-x-2">
          <span>© {moment().year()}</span>
          <span>Agriboost</span>
          <span>All rights reserved</span>
        </div>
        {/* Payment */}
        <div className="flex items-center gap-2 text-4xl">
          {/* visa svg */}
          <FaCcVisa />
          {/* mastercard svg */}
          <FaCcMastercard />
          {/* paypal svg */}
          <FaCcPaypal />
          {/* discover svg */}
          <FaCcDiscover />
        </div>
      </div>
    </div>
  );
};

export default ShopFooter;
