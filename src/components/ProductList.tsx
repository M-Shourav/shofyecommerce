import { getData } from "@/app/helpers";
import { ProductType } from "../../type";
import Container from "./Container";
import ProductCard from "./ProductCard";

export default async function ProductsList() {
  const endpoint = "https://dummyjson.com/products";
  const product = await getData(endpoint);
  const productArray = product.products;
  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
      {productArray.map((item: ProductType) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </Container>
  );
}
