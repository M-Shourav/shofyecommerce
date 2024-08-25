"use client";
import { useDispatch } from "react-redux";
import { ProductType } from "../../type";
import { addToCart } from "@/app/redux/shofySlice";
import toast, { Toaster } from "react-hot-toast";

interface PropsType {
  product?: ProductType;
}

const AddToCartButton = ({ product }: PropsType) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };
  return (
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
  );
};

export default AddToCartButton;
