import { getData } from "@/app/helpers";
import Container from "@/components/Container";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

const SinglePage = async ({ params }: Props) => {
  const { id } = params;
  const endpoint = `https://dummyjson.com/products/${id}`;
  const product = await getData(endpoint);
  console.log(product);

  return (
    <Container className="py-10">
      <div>SinglePage</div>
    </Container>
  );
};

export default SinglePage;
