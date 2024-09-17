import { getData } from "@/app/helpers";
import AddToCartButton from "@/components/AddToCartButton";
import Container from "@/components/Container";
import ProductImage from "@/components/ProductImage";
import ProductPrice from "@/components/ProductPrice";
import RatingStars from "@/components/RatingStars";
import SavingPrice from "@/components/SavingPrice";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { SlSocialInstagram } from "react-icons/sl";

interface Props {
  params: {
    id: string;
  };
}

const Links = () => {
  return (
    <div className="flex items-center gap-x-2 text-xl">
      <Link
        href={"https://www.facebook.com/profile.php?id=100027878711748"}
        target="blank"
        className="w-8 h-8 text-sm rounded-full border border-gray-300 hover:bg-themeColor
         hover:text-white flex items-center justify-center duration-200"
      >
        <FaFacebookF />
      </Link>
      <Link
        href={"https://x.com/MasumAh68543"}
        target="blank"
        className="w-8 h-8 text-sm rounded-full border border-gray-300 hover:bg-themeColor
         hover:text-white flex items-center justify-center duration-200"
      >
        <BsTwitterX />
      </Link>
      <Link
        href={"https://www.instagram.com/masum_shourav/"}
        target="blank"
        className="w-8 h-8 text-sm rounded-full border border-gray-300 hover:bg-themeColor
         hover:text-white flex items-center justify-center duration-200"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        href={"https://www.instagram.com/masum_shourav/"}
        target="blank"
        className="w-8 h-8 text-sm rounded-full border border-gray-300 hover:bg-themeColor
         hover:text-white flex items-center justify-center duration-200"
      >
        <SlSocialInstagram />
      </Link>
      <Link
        href={"https://www.instagram.com/masum_shourav/"}
        target="blank"
        className="w-8 h-8 text-base rounded-full border border-gray-300 hover:bg-themeColor
         hover:text-white flex items-center justify-center duration-200"
      >
        <IoLogoWhatsapp />
      </Link>
      <Link
        href={"https://www.instagram.com/masum_shourav/"}
        target="blank"
        className="w-8 h-8 text-base  rounded-full border border-gray-300 hover:bg-themeColor
         hover:text-white flex items-center justify-center duration-200"
      >
        <CiMail />
      </Link>
      <Link
        href={"https://www.instagram.com/masum_shourav/"}
        target="blank"
        className="w-8 h-8 text-sm rounded-full border border-gray-300 hover:bg-themeColor
         hover:text-white flex items-center justify-center duration-200"
      >
        <FaYoutube />
      </Link>
    </div>
  );
};

const SinglePage = async ({ params }: Props) => {
  const { id } = params;
  const endpoint = `https://dummyjson.com/products/${id}`;
  const product = await getData(endpoint);
  const regularPrice = product?.price;
  const discountPrice = product?.price + product?.discountPercentage / 100;

  return (
    <Container className=" py-5  flex flex-col md:flex-row items-start gap-x-10">
      <ProductImage images={product?.images} />
      <div className="w-full md:w-1/2 flex flex-col  gap-4">
        <p className="text-xl font-semibold text-darkText">{product?.title}</p>
        <div className="flex items-center justify-between">
          <ProductPrice
            regularPrice={regularPrice}
            discountPrice={discountPrice}
            product={product}
          />
          <div className="flex items-center justify-center gap-2">
            <RatingStars rating={product?.rating} />
            <p>({product?.rating} reviews)</p>
          </div>
        </div>
        <SavingPrice product={product} />
        <p className="text-sm tracking-wide text-darkText">
          {product?.description}
        </p>
        <p className="text-green-500">{product?.stock} products available</p>
        <p>
          warranty:
          <span className=" font-semibold tracking-wide">
            {product?.warrantyInformation}
          </span>
        </p>
        <p>
          Brand:
          <span className=" font-semibold tracking-wide">{product?.brand}</span>
        </p>
        <p>
          Category:
          <span className=" font-semibold tracking-wide">
            {product?.category}
          </span>
        </p>
        <h1 className="flex items-center gap-2">
          Tags:
          {product?.tags.map((item: string) => (
            <p className=" font-semibold tracking-wide">{item}</p>
          ))}
        </h1>
        <AddToCartButton product={product} />
        <div className="flex items-center gap-3">
          <h3 className="font-semibold">Share:</h3>
          <Links />
        </div>
        <div className="flex items-center gap-2">
          <IoMdCheckmarkCircleOutline className="text-gray-400 text-xl" />
          <p className="text-base text-gray-700 ">{product?.returnPolicy}</p>
        </div>
      </div>
    </Container>
  );
};

export default SinglePage;
