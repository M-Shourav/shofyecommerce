"use client";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { ProductType, StateType } from "../../type";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addToFavorite } from "@/app/redux/shofySlice";
import toast from "react-hot-toast";
import QuickView from "./QuickView";
const Sidebar = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();
  const { favorite } = useSelector((state: StateType) => state.shopy);
  const [existingProduct, setExistingProduct] = useState<ProductType | null>(
    null
  );
  useEffect(() => {
    const availableProducts = favorite.find((item) => item?.id === product?.id);
    if (availableProducts) {
      setExistingProduct(availableProducts);
    } else {
      setExistingProduct(null);
    }
  }, [favorite, product, dispatch, existingProduct]);

  const handleFavorite = () => {
    dispatch(addToFavorite(product));
    if (existingProduct) {
      toast.success("Removed from favorite successfully ");
    } else {
      toast.success("Added to favorite successfully");
    }
  };
  return (
    <div
      className="absolute bottom-10 right-2 bg-themeWhite flex flex-col 
        text-2xl gap-y-3 border px-2 py-2 rounded-md transform translate-x-20 overflow-hidden group-hover:translate-x-0 duration-300"
    >
      <Link href={"/cart"} className="hoverEffect">
        <FiShoppingCart />
      </Link>
      <QuickView product={product} />
      <button onClick={handleFavorite} className="hoverEffect">
        {existingProduct ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
      </button>
    </div>
  );
};

export default Sidebar;
