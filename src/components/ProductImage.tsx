"use client";

import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  images: string[];
  className?: string;
}

const ProductImage = ({ images, className }: Props) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <div
      className={twMerge("w-full md:w-1/2 flex items-start gap-2.5", className)}
    >
      <div className="flex flex-col gap-y-1">
        {images?.map((item, index) => (
          <div
            key={index}
            className={`border h-20 rounded-md ${
              item === currentImage ? "border-themeColor" : "border-gray-300"
            }`}
          >
            <Image
              onClick={() => setCurrentImage(item)}
              src={item}
              alt="productImage"
              width={200}
              height={200}
              className="w-full h-full object-contain p-3 cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div>
        <Image
          src={currentImage}
          alt="ProductsImage"
          width={200}
          height={200}
          className="w-80 h-80 object-contain border border-themeColor/50 rounded-md"
        />
      </div>
    </div>
  );
};

export default ProductImage;
