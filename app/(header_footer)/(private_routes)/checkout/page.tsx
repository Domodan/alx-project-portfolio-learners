import React from "react";
import PaymentButtons from "../../../PaymentButtons";
import DebitCreditForm from "../../../DebitCreditForm";
import CartItem from "../../../CartItem";
import Button from "../../../Button";

const Checkout = () => {
  return (
    <div className="lg:flex">
      <div className="lg:flex lg:justify-end lg:basis-7/12 lg:h-screen px-5">
        <div className="pt-3 lg:w-9/12">
          <div>
            <h2 className="text-4xl font-extrabold ">Checkout</h2>
          </div>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">
              Payment Method
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="flex justify-evenly">
            <PaymentButtons />
          </div>
          <div>{/* <DebitCreditForm /> */}</div>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">
              Order Details
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div>
            {[1, 2, 3].map((item, index) => (
              <CartItem key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="pt-3 basis-5/12 bg-gray-100">
        <div className="lg:w-1/2 m-10">
          <h3 className="text-2xl font-extrabold mb-3">Summary</h3>
          <div className="flex justify-between pb-2">
            <span>Original Price</span>
            <span>$124.56</span>
          </div>
          <div className="flex justify-between pb-3 border-b border-b-gray-400">
            <span>Discounts</span>
            <span>$100.00</span>
          </div>
          <div className="flex justify-between pb-3 pt-2">
            <span className="text-xl font-extrabold">Total</span>
            <span className="text-xl font-extrabold">$24.56</span>
          </div>
          <div className="hidden lg:flex lg:flex-col">
            <Button styles="bg-blue-500">
              <span className="text-white">Checkout</span>
            </Button>
          </div>

          <div className="fixed bottom-0 left-0 right-0 lg:hidden lg:h-screen bg-gray-100 dark:bg-zinc-900 pt-3 rounded shadow-xl z-10">
            <div className="flex flex-col">
              <div className="flex justify-between px-3">
                <span className="text-xl font-extrabold">Total</span>
                <span className="text-xl font-extrabold">$24.56</span>
              </div>
              <Button styles="bg-blue-500">
                <span className="text-white">Checkout</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
