"use client";
import { useDispatch, useSelector } from "react-redux";
import { ProductType, StateType } from "../../type";
import {
  addToCart,
  decreaseItems,
  increaseItems,
} from "@/app/redux/shofySlice";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";
interface PropsType {
  product?: ProductType;
}
const AddToCartButton = ({ product }: PropsType) => {
  const [existingProducts, setExistingProdutcs] = useState<ProductType | null>(
    null
  );
  const { cart } = useSelector((state: StateType) => state.shopy);
  const dispatch = useDispatch();
  useEffect(() => {
    const availableProducts = cart?.find((item) => item?.id === product?.id);
    if (availableProducts) {
      setExistingProdutcs(availableProducts);
    }
  }, [cart, product]);

  const handleClick = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };
  const handlePluse = () => {
    dispatch(increaseItems(product?.id));
    toast.success(`${product?.title.substring(0, 10)}... added successfully!`);
  };
  const handleMinus = () => {
    if (existingProducts?.quantity! > 1) {
      dispatch(decreaseItems(product?.id));
      toast.success(
        `${product?.title.substring(0, 10)}... removed successfully!`
      );
    } else {
      toast.error("you can not dcrease less than 1");
    }
  };
  return (
    <>
      {existingProducts ? (
        <div className="flex items-center justify-center gap-x-5 h-10 py-2 text-lg">
          <button
            onClick={handleMinus}
            disabled={existingProducts?.quantity === 1}
            className="h-full w-12 border  border-sky-300 rounded-full flex
           items-center justify-center hover:bg-slate-200 duration-200
            disabled:text-red-500 "
          >
            <FaMinus />
          </button>
          <span className="text-lg">{existingProducts?.quantity}</span>
          <button
            onClick={handlePluse}
            className="h-full w-12 border  border-sky-300 rounded-full flex
           items-center justify-center hover:bg-slate-200 duration-200"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <div
          className=" text-center 
        overflow-hidden "
        >
          <button
            onClick={handleClick}
            className="w-full bg-black hover:bg-themeColor py-1 text-themeWhite transform translate-y-10 group-hover:translate-y-0 duration-300"
          >
            Add to cart
          </button>
        </div>
      )}
    </>
  );
};

export default AddToCartButton;
