import { getData } from "@/app/helpers";
import AddToCartButton from "@/components/AddToCartButton";
import Container from "@/components/Container";
import PriceFormatted from "@/components/PriceFormatted";
import ProductImage from "@/components/ProductImage";
import ProductPrice from "@/components/ProductPrice";
import SavingPrice from "@/components/SavingPrice";

interface Props {
  params: {
    id: string;
  };
}

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
          <p>({product?.rating} reviews)</p>
        </div>
        <SavingPrice product={product} />
        <p className="text-sm tracking-wide text-darkText">
          {product?.description}
        </p>
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
      </div>
    </Container>
  );
};

export default SinglePage;
