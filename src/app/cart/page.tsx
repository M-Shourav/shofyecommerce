"use client";
import { useSelector } from "react-redux";
import { StateType } from "../../../type";
import Image from "next/image";
import Link from "next/link";
import { MdClose } from "react-icons/md";
const CartProducts = () => {
  const { cart } = useSelector((state: StateType) => state?.shopy);
  return (
    <div className="w-full py-10">
      {cart?.map((item) => (
        <div key={item?.id} className="grid grid-cols-6 place-items-center">
          <Image
            src={item?.images[0]}
            alt="productImage"
            className="w-16 lg:w-20"
            width={200}
            height={200}
          />
          <p className=" col-span-2 text-sm lg:text-base text-start">
            {item?.title}
          </p>
          <p>${item?.price}</p>
          <p>Quantity Add</p>
          <button className="flex items-center gap-x-1 text-xs lg:text-base text-gray-500 hover:text-red-500">
            <MdClose className="text-lg mt-1" />
            remove
          </button>
        </div>
      ))}

      <div className="max-w-80 ml-auto px-8 flex flex-col  gap-7 py-10 mt-10 border-t-2 bg-themeWhite border-1 shadow-lg shadow-gray-300 mr-10">
        <div className="flex items-center justify-between text-xl font-semibold text-darkText/80 border-b border-b-gray-400">
          <h1>Subtotal</h1>
          <p>$1122.99</p>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <h1>Tax</h1>
          <p>$90.00</p>
        </div>
        <div className="flex items-center justify-between  text-lg font-semibold">
          <h1>
            Total
            <p className="text-xs text-gray-500 font-normal">
              (shipping fees not included)
            </p>
          </h1>
          <p>$1220.00</p>
        </div>
        <button className="px-6 py-3 text-base font-semibold bg-darkText text-themeWhite">
          Proceed to Checkout
        </button>
        <Link
          href={"/products"}
          className="text-center text-sm underline  text-gray-600 hover:text-lightblue hover:no-underline duration-200"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
};

export default CartProducts;
