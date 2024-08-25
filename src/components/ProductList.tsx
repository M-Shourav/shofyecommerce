import { ProductType } from "../../type";
import Container from "./Container";
import ProductCard from "./ProductCard";

export default async function ProductsList() {
  async function getData() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data;
  }
  let product = await getData();
  const productArray = product.products;
  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
      {productArray.map((item: ProductType) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </Container>
  );
}
