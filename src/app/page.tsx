import Banner from "@/components/pages/home/Banner";
import TopProductsBanner from "@/components/pages/home/TopProductsBanner";
import ProductList from "@/components/ProductList";
export default function Home() {
  return (
    <main>
      <div>
        <Banner />
        <TopProductsBanner />
        <ProductList />
      </div>
    </main>
  );
}
