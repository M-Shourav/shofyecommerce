import Link from "next/link";
import React, { useEffect, useState } from "react";
import { StateType } from "../../../type";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const { cart } = useSelector((state: StateType) => state?.shopy);
  // State to hold subtotal,tax,total
  const [Subtotal, setsubtotal] = useState<String>("");
  const [tax, setTax] = useState<String>("");
  const [total, setTotal] = useState<String>("");
  useEffect(() => {
    const countSubTotal = cart?.reduce((acc, item) => {
      return acc + item?.price * item?.quantity;
    }, 0);
    const subtotal = new Number(countSubTotal).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
    setsubtotal(subtotal);

    const taxrate = 0.04;
    const countTax = countSubTotal * taxrate;
    const TaxtRate = new Number(countTax).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
    setTax(TaxtRate);

    const calculateTotal = countSubTotal + countTax;

    const TotalAmount = new Number(calculateTotal).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
    setTotal(TotalAmount);
  }, [cart]);

  return (
    <div className="flex flex-col gap-7  bg-gray-100 px-4 py-10 sm:p-6 lg:col-span-5 mt-16 lg:mt-0 rounded-lg">
      <div className="text-xl font-semibold flex items-center justify-between border-b border-gray-300 gap-4">
        <h1>Subtotal</h1>
        <p>{Subtotal}</p>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <h1>Tax</h1>
        <p>{tax}</p>
      </div>
      <div className="flex items-center justify-between  text-lg font-semibold">
        <h1>
          Total
          <p className="text-xs text-gray-500 font-normal">
            (shipping fees not included)
          </p>
        </h1>
        <p>{total}</p>
      </div>
      <button className="px-6 py-3 text-base font-semibold bg-darkText text-themeWhite">
        Proceed to Checkout
      </button>
      <Link
        href={"/"}
        className="text-center text-sm underline  text-gray-600 hover:text-lightblue hover:no-underline duration-200"
      >
        Continue shopping
      </Link>
    </div>
  );
};

export default CartSummary;
