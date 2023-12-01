import { MoonIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type Props = {
  cartItem?: boolean;
};

const CartItem = ({ cartItem }: Props) => {
  return (
    <div className="flex border-y mt-4">
      <div className="basis-2/12 relative">
        <Image src="/course-image.jpg" fill alt="course-image" />
      </div>
      <div className="basis-9/12 px-4 py-2">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div>
            <h1 className="font-extrabold text-xl dark:text-white">
              Name of Course
            </h1>
            {cartItem ? (
              <>
                <span className="mt-2 text-sm text-gray-400">
                  By Bright Adams
                </span>
                <span className="flex items-center mt-2 text-sm text-gray-400">
                  <MoonIcon className="h-4 w-4 cursor-pointer text-yellow-500" />
                  <span className="pl-2">By Bright Adams</span>
                </span>
                <div className="flex mt-2">
                  <span className="text-xs">32 hours</span>
                  <span className="text-xs pl-2">32 hours</span>
                  <span className="text-xs pl-2">32 hours</span>
                </div>
              </>
            ) : null}
          </div>
          {cartItem ? (
            <div className="flex lg:flex-col lg:justify-center items-center">
              <span className="text-xs">Remove</span>
              <span className="pl-2 lg:pl-0 text-xs">Add to Wish List</span>
            </div>
          ) : null}
        </div>
      </div>
      <div className="basis-1/12 flex flex-col py-2 items-center">
        <span className="text-center dark:text-white font-semibold text-3xl">
          ¢13
        </span>
        <br></br>
        <span className="line-through text-center dark:text-white">$100</span>
      </div>
    </div>
  );
};

export default CartItem;
