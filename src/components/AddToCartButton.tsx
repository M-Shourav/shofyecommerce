"use client";
import { useDispatch, useSelector } from "react-redux";
import { ProductType, StateType } from "../../type";
import {
  addToCart,
  decreaseItems,
  increaseItems,
} from "@/app/redux/shofySlice";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import { FaCartShopping } from "react-icons/fa6";
interface PropsType {
  product?: ProductType;
}
const AddToCartButton = ({ product }: PropsType) => {
  const { cart } = useSelector((state: StateType) => state.shopy);
  const [existingProduct, setExistingProduct] = useState<ProductType | null>(
    null
  );
  useEffect(() => {
    const availableProducts = cart.find((item) => item?.id === product?.id);
    if (availableProducts) {
      setExistingProduct(availableProducts);
    }
  }, [cart, product]);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  const handlePlus = () => {
    dispatch(increaseItems(product?.id));
    toast.success(`Quantity Increase successfully!`);
  };
  const handleMinus = () => {
    dispatch(decreaseItems(product?.id));
    toast.success(`Quantity decreased successfully!`);
  };
  return (
    <>
      {existingProduct ? (
        <div className="flex items-center justify-center gap-x-5 h-10 py-2  text-lg">
          <button
            onClick={handleMinus}
            disabled={existingProduct?.quantity === 1}
            className="h-10 w-10 border border-sky-300 rounded-full flex
          items-center justify-center bg-slate-200 hover:bg-darkText hover:text-lightBg duration-200
            disabled:text-red-500"
          >
            <FaMinus />
          </button>
          <span className="text-xl">{existingProduct?.quantity}</span>
          <button
            onClick={handlePlus}
            className="h-10 w-10 border border-sky-300 rounded-full flex
          items-center justify-center bg-slate-200 hover:bg-darkText hover:text-lightBg duration-200"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <div className=" text-center">
          <button
            onClick={handleClick}
            className="relative inline-flex h-12 active:scale-95 transistion
             overflow-hidden rounded-lg p-[1px] focus:outline-none w-full"
          >
            <span
              className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
            bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
            />
            <span
              className="inline-flex h-full w-full cursor-pointer items-center
             justify-center rounded-lg bg-slate-950 px-7 text-base font-medium
             text-white backdrop-blur-3xl gap-2 undefined"
            >
              Add to cart <FaShoppingCart />
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default AddToCartButton;
