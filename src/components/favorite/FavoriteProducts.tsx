"use client";
import { useSelector } from "react-redux";
import { StateType } from "../../../type";
import Button from "../ui/Button";
import FavoriteProduct from "./FavoriteProduct";
import SocialLinks from "../SocialLinks";

const FavoriteProducts = () => {
  const { favorite } = useSelector((state: StateType) => state.shopy);
  return (
    <div>
      {favorite?.length > 0 ? (
        <div className="py-10">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            Wishlist
          </h1>
          <div>
            {favorite?.map((item) => (
              <FavoriteProduct key={item?.id} product={item} />
            ))}
          </div>
          <div className="py-5 flex items-center justify-between">
            <Button
              href="/cart"
              className="bg-transparent text-base border border-gray-300 text-darkText hover:text-white"
            >
              Go To Cart
            </Button>
            <div className="flex items-center text-base ">
              Share: <SocialLinks className="text-base" />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="h-80 my-10  flex flex-col items-center justify-center gap-4 bg-white
       py-5 border border-green-200 drop-shadow-2xl"
        >
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
            Your Wishlist is Empty!
          </h1>
          <Button href="/">Go To Shoping</Button>
        </div>
      )}
    </div>
  );
};

export default FavoriteProducts;
