"use client";
import React, { useEffect, useState } from "react";
import PriceFormatted from "./PriceFormatted";
import { FaCheck } from "react-icons/fa";
import { ProductType, StateType } from "../../type";
import { useSelector } from "react-redux";
interface props {
  product: ProductType;
}
const SavingPrice = ({ product }: props) => {
  const regularPrice = product?.price;
  const discountPercentage = product?.discountPercentage;
  const discountAmount = (regularPrice * discountPercentage) / 100;
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
          {product?.stock ? (
            <p className="flex items-center gap-1">
              <FaCheck className="text-green-500 " /> In Stock
            </p>
          ) : (
            "Out of Stock"
          )}
        </p>
      )}
      <p className="text-sm">
        You are saving{" "}
        <PriceFormatted
          className="text-semibold text-green-500"
          amount={
            existingProduct
              ? discountAmount * existingProduct?.quantity
              : discountAmount
          }
        />
        upon purchase
      </p>
    </div>
  );
};

export default SavingPrice;
