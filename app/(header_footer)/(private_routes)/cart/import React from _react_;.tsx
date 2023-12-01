import React from "react";
import Image from "next/image";
const Cart = () => {
  return (
    <div className="grid grid-cols-4 px-2 lg:px-20">
      <div className="col-span-3">
        <h2 className="font-extrabold text-3xl">Course Cart</h2>
        <div>
          <h4 className="border-b font-extrabold">1 Course in Cart</h4>
          <div className="flex">
            <div className="basis-1/4 relative">
              <Image src="/course-image.jpg" fill alt="course-image" />
            </div>
            <div className="basis-1/2 bg-yellow-300">
              <div className="flex flex-auto justify-between">
                <div>
                  <h1>Name of Course</h1>
                  <span>By Bright Adams</span>
                  <div className="flex">
                    <span className="text-xs">32 hours</span>
                    <span className="text-xs">32 hours</span>
                    <span className="text-xs">32 hours</span>
                  </div>
                </div>
                <div>Remove</div>
              </div>
            </div>
            <div className="basis-1/4 bg-green-400">3</div>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div>
          <span> Checkout</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
