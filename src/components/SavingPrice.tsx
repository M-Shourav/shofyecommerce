"use client";
import { FaCheck } from "react-icons/fa";
import PriceFormatted from "./PriceFormatted";
import { useSelector } from "react-redux";
import { ProductType, StateType } from "../../type";
import { useEffect, useState } from "react";
const SavingPrice = ({ product }: any) => {
  const regularPrice = product?.price;
  const discountPrice = (product?.price + product?.discountPercentage) / 100;

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
  return (
    <div>
      {product?.availabilityStatus && (
        <p className="flex items-center gap-x-1 text-sm font-semibold text-gray-700">
          <FaCheck className="text-green-500" /> In Stock
        </p>
      )}
      <p className="text-sm">
        You are saving{" "}
        <PriceFormatted
          className="text-sm text-green-500"
          amount={
            existingProduct
              ? (regularPrice - discountPrice) / 100
              : regularPrice
          }
        />{" "}
        upon purchase
      </p>
    </div>
  );
};

export default SavingPrice;
