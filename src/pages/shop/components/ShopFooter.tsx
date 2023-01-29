import React from "react";
import { BiPaperPlane } from "react-icons/bi";
import { Form } from "react-router-dom";
import Input from "../../../shared/components/Input";

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
      <hr />
      {/* Section 2 */}
      <hr />
      {/* Section 3 */}
      <div className="">Hello</div>
    </div>
  );
};

export default ShopFooter;
