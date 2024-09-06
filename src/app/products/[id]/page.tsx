import { getData } from "@/app/helpers";
import AddToCartButton from "@/components/AddToCartButton";
import Container from "@/components/Container";
import ProductImage from "@/components/ProductImage";

interface Props {
  params: {
    id: string;
  };
}

const SinglePage = async ({ params }: Props) => {
  const { id } = params;
  const endpoint = `https://dummyjson.com/products/${id}`;
  const product = await getData(endpoint);

  return (
    <Container className=" py-5  flex flex-col md:flex-row items-start gap-x-10">
      <ProductImage images={product?.images} />
      <div className="w-full md:w-1/2">
        <p className="text-lg font-medium tracking-wide capitalize">
          Brand:{product?.category}
        </p>
        <h1 className="text-sm font-semibold">{product?.title}</h1>
        <p>{product?.description}</p>
      </div>
    </Container>
  );
};

export default SinglePage;
