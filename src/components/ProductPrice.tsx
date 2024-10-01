"use client";
import { useSelector } from "react-redux";
import { ProductType, StateType } from "../../type";
import { useEffect, useState } from "react";
import PriceFormatted from "./PriceFormatted";

const ProductPrice = ({ regularPrice, discountPrice, product }: any) => {
  const { cart } = useSelector((state: StateType) => state?.shopy);
  const [existingPrice, setExistingPrice] = useState<ProductType | null>(null);
  useEffect(() => {
    const availableProduct = cart?.find((item) => item?.id === product?.id);
    if (availableProduct) {
      setExistingPrice(availableProduct);
    }
  }, [cart, product]);

  return (
    <div className="flex items-center gap-5 md:gap-3">
      <PriceFormatted
        className="text-base text-gray-700 line-through"
        amount={
          existingPrice
            ? discountPrice * existingPrice?.quantity!
            : discountPrice
        }
      />
      <PriceFormatted
        className="font-semibold text-lightblue"
        amount={
          existingPrice ? regularPrice * existingPrice?.quantity : regularPrice
        }
      />
    </div>
  );
};

export default ProductPrice;
