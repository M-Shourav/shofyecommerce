import { getData } from "@/app/helpers";
import { ProductType } from "../../type";
import Container from "./Container";
import ProductCard from "./ProductCard";
import Title from "./Title";

export default async function ProductsList() {
  const endpoint = "https://dummyjson.com/products";
  const product = await getData(endpoint);
  const productArray = product.products;
  return (
    <Container>
      <h2 className="text-xl md:text-4xl font-bold">
        <span className="text-themeColor">Trending</span> Products
      </h2>
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {productArray.map((item: ProductType) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </Container>
  );
}
