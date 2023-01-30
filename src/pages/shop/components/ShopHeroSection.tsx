import React from "react";
const img1 =
  "https://img.freepik.com/free-photo/happy-young-african-man-sunglasses-listening-music_171337-12905.jpg?w=1380&t=st=1675018299~exp=1675018899~hmac=7e6a67a50e21ad87100a35dc753c43f60906cac438182e54e0352f2bb59110d3";
const img2 =
  "https://img.freepik.com/free-photo/black-man-posing-with-headphones_23-2148171642.jpg?w=1480&t=st=1675016069~exp=1675016669~hmac=88aa6e47a0e57b28050b77e1d04c3517f4ae7d7abdfd1bb041e50d53d8885a20";

const ShopHeroSection = () => {
  return (
    <div className="w-full bg-neutral-100">
      <div className="container mx-auto py-10 md:grid gap-4 md:grid-cols-2 z-[1]">
        {/* Left section */}
        <div
          className="rounded-md  h-96 bg-white shadow-lg bg-right bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('${img1}')` }}
        >
          <div className="h-full w-full flex flex-col items-start gap-4 justify-center p-4">
            <span> Super offer</span>
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl">Iphone 14 pro airpods</h1>
              <p>Form $122</p>
              <button className="w-fit px-6 py-2 bg-primary text-neutral-100 rounded-lg">Shop now</button>
            </div>
          </div>
        </div>
        {/* Right section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
          {[1, 2, 3, 4].map((i) => (
            <div
            key={i}
              style={{ backgroundImage: `url('${img2}')` }}
              className="h-full bg-right bg-cover rounded-md bg-no-repeat border"
            >
              <div className="h-full w-full p-4 flex flex-col gap-4 text-neutral-100">
                <span>Best offer</span>
                <div>
                  <h1 className="text-xl">Headphones max</h1>
                  <p>From $20</p>
                  <button className="bg-primary px-4 py-1 rounded-lg">Shop now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopHeroSection;
