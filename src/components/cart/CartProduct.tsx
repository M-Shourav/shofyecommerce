import Link from "next/link";
import { ProductType } from "../../../type";
import Image from "next/image";
import AddToCartButton from "../AddToCartButton";
import PriceFormatted from "../PriceFormatted";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteItems } from "@/app/redux/shofySlice";
import { FaCheck } from "react-icons/fa";

const CartProduct = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex py-6 sm:py-10">
      <Link
        href={{
          pathname: `/products/${product?.id}`,
          query: { id: product?.id },
        }}
        className="h-24 w-24 sm:h-40 sm:w-40 flex items-center justify-center overflow-hidden 
         border border-themeColor/30 hover:border-themeColor rounded-md"
      >
        <Image
          src={product?.images[0]}
          alt="productsImage"
          width={200}
          height={200}
          className="bg-gray-100 p-2 hover:scale-110 object-contain duration-200"
        />
      </Link>
      {/* Details */}
      <div className="ml-4 sm:ml-6 flex flex-1 flex-col justify-between">
        <div className=" relative pr-9 sm:grid-cols-4 sm:gap-x-6 sm:pr-0">
          <div className="flex flex-col col-span-3 gap-1">
            <h3 className="text-base font-semibold w-full">
              {product?.title.substring(0, 80)}
            </h3>
            <p className="text-xs">
              Brand: <span className="font-medium">{product?.brand}</span>
            </p>
            <p className="text-xs">
              Category: <span className="font-medium">{product?.category}</span>
            </p>
            <div className="flex items-center gap-x-5">
              <PriceFormatted amount={product?.price * product?.quantity} />
              <AddToCartButton product={product} />
            </div>
          </div>
          <div className="absolute right-0 top-0 text-xl hover:text-red-500 duration-200">
            <button onClick={() => dispatch(deleteItems(product?.id))}>
              <IoCloseOutline />
            </button>
          </div>
          <div>
            {product?.availabilityStatus && (
              <p className="flex items-center gap-x-1 text-sm font-semibold text-gray-700">
                <FaCheck className="text-green-500" /> In Stock
              </p>
            )}
            <p className="text-sm">
              You are saving{" "}
              <PriceFormatted
                className="text-semibold text-green-500"
                amount={
                  product?.price *
                  (product?.discountPercentage / 100) *
                  product?.quantity
                }
              />
              upon purchase
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
