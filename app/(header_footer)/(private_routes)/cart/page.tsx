import React from "react";
import Image from "next/image";
import Button from "../../../Button";
import { XMarkIcon } from "@heroicons/react/24/outline";
import CartItem from "../../../CartItem";
const Cart = () => {
  return (
    <div className=" px-2 lg:px-20">
      <h2 className="font-extrabold text-3xl">Course Cart</h2>

      <div className="flex flex-col-reverse lg:flex-row mt-5">
        <div className="basis-4/5">
          <div className="lg:pr-10">
            <h4 className="font-extrabold pb-2">1 Course in Cart</h4>
            {[1, 2, 3].map((item) => (
              <div className="mt-4" key={item}>
                <CartItem cartItem />
              </div>
            ))}
          </div>
        </div>
        <div className="basis-1/5">
          <div className="flex flex-col">
            <span className="text-lg mb-3 dark:text-white">Total</span>
            <span className="text-3xl mb-3 font-extrabold dark:text-white">
              $34
            </span>
            <span className="text-lg mb-3 line-through dark:text-white">
              $124
            </span>
            <span className="text-lg mb-3 dark:text-white">72% off</span>
            <Button styles="bg-blue-500">
              <span className="text-white">Checkout</span>
            </Button>
            <span className="mt-5 border-t-2">Promotions</span>
            <span className="flex items-center mt-3">
              <XMarkIcon className="h-4 w-4 cursor-pointer text-gray-900 dark:text-gray-500" />{" "}
              <span className="pl-4">38849hhf8 applied</span>
            </span>
            <div className="flex border border-gray-500 mt-3">
              <input
                type="text"
                className="w-full h-10 placeholder-gray-500 text-gray-500 outline-none bg-transparent flex-1 px-3"
                placeholder="Enter Promo code"
              />
              <Button styles="bg-blue-500">
                <span className="text-white">Apply</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
