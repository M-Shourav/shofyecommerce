import Image from "next/image";
import { ProductType } from "../../type";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import AddToCartButton from "./AddToCartButton";
import Link from "next/link";
import ProductPrice from "./ProductPrice";
import RatingStars from "./RatingStars";

interface Props {
  product: ProductType;
}

const SideBar = () => {
  return (
    <div
      className="absolute bottom-10 right-2 bg-themeWhite flex flex-col 
    text-2xl gap-y-3 border px-2 py-2 rounded-md transform translate-x-20 overflow-hidden group-hover:translate-x-0 duration-300"
    >
      <Link href={"/cart"} className="hoverEffect">
        <FiShoppingCart />
      </Link>
      <button className="hoverEffect border-y border-y-black">
        <IoEyeOutline />
      </button>
      <button className="hoverEffect">
        <MdOutlineFavoriteBorder />
      </button>
    </div>
  );
};

const ProductCard = ({ product }: Props) => {
  const regularPrice = product?.price;
  const discountPrice = product?.price + product?.discountPercentage / 100;

  return (
    <div className="border py-2 border-darkText/30 hover:shadow-lg rounded-md hover:shadow-black/20 duration-200 group overflow-hidden">
      <div className="relative">
        <Link
          href={{
            pathname: `/products/${product?.id}`,
            query: { id: product?.id },
          }}
        >
          <Image
            src={product?.images[0]}
            alt="product-image"
            width={500}
            height={500}
            className="w-full h-64 object-contain group-hover:scale-110 duration-200"
          />

          <p className="absolute top-2 right-2 flex items-center gap-x-1 bg-lightblue px-2 py-1 text-lightBg/90 text-sm font-semibold rounded-md">
            {product?.discountPercentage} %
          </p>
        </Link>
        <SideBar />
      </div>
      <div className="border-t border-t-productsBg py-2 px-4 flex flex-col gap-y-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium capitalize text-gray-600">
            {product?.category}
          </p>
          <RatingStars rating={product?.rating} />
        </div>
        <h2 className="text-base font-semibold line-clamp-1">
          {product?.title}
        </h2>
        <ProductPrice
          regularPrice={regularPrice}
          discountPrice={discountPrice}
          product={product}
        />
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
