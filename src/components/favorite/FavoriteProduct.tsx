import Image from "next/image";
import { ProductType } from "../../../type";
import PriceFormatted from "../PriceFormatted";
import AddToCartButton from "../AddToCartButton";
import Container from "../Container";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deletefavItems } from "@/app/redux/shofySlice";

const FavoriteProduct = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(deletefavItems(product?.id));
  };
  return (
    <div>
      <Container className="md:grid md:grid-cols-5 items-center border border-transparent border-b-gray-300 border-t-gray-300">
        <Image
          src={product?.images[0]}
          alt="products_image"
          width={200}
          height={200}
          className="w-24 object-contain"
        />
        <p>{product?.title}</p>
        <PriceFormatted
          amount={product?.price}
          className="text-themeColor font-semibold"
        />
        <AddToCartButton product={product} />
        <button
          onClick={handleRemove}
          className="flex flex-col items-center justify-center gap-y-2 hover:text-red-500 duration-200"
        >
          <IoCloseOutline className="text-xl" />
          remove
        </button>
      </Container>
    </div>
  );
};

export default FavoriteProduct;
