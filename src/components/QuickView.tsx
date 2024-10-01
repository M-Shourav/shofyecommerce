"use client ";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { IoCloseOutline, IoEyeOutline } from "react-icons/io5";
import { ProductType } from "../../type";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import RatingStars from "./RatingStars";
import AddToCartButton from "./AddToCartButton";

interface Props {
  product: ProductType;
}
const quickview = ({ product }: Props) => {
  let [isOpen, setIsOpen] = useState(false);
  const regularPrice = product?.price;
  const discountPrice = product?.price + product?.discountPercentage / 100;
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="hoverEffect border-y border-y-black"
      >
        <IoEyeOutline />
      </button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 z-10 w-screen bg-darkText/20 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-4xl rounded-xl bg-white text-black drop-shadow-2xl p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl hover:text-red-500 duration-200 absolute top-2 md:top-6 right-2 md:right-6"
              >
                <IoCloseOutline />
              </button>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <ProductImage
                  images={product?.images!}
                  className="w-full md:w-1/3"
                />
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-semibold tracking-wide text-gray-600">
                    {product?.brand}
                  </p>
                  <p className="text-sm md:text-xl font-semibold text-darkText">
                    {product?.title}
                  </p>
                  <div className="flex items-center gap-2">
                    <RatingStars rating={product?.rating} />
                    <p>({product?.rating} reviews)</p>
                  </div>
                  <p className="text-sm tracking-wide md:max-w-[300px] text-darkText">
                    {product?.description}
                  </p>
                  <ProductPrice
                    regularPrice={regularPrice}
                    discountPrice={discountPrice}
                    product={product}
                  />
                  <p className="text-green-500">
                    {product?.stock} products available
                  </p>
                  <AddToCartButton product={product} />
                  <div>
                    <p>
                      Category:
                      <span className="tracking-wide">{product?.category}</span>
                    </p>
                    <h1 className="flex items-center gap-2">
                      Tags:
                      {product?.tags.map((item: string, index: number) => (
                        <p key={index} className=" tracking-wide">
                          {item} {item && ","}
                        </p>
                      ))}
                    </h1>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default quickview;
