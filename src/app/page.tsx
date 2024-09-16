import Banner from "@/components/pages/home/Banner";
import TopProductsBanner from "@/components/pages/home/TopProductsBanner";
import ProductList from "@/components/ProductList";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
