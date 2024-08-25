import { BannerOneImage } from "@/assets";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

/*
const getData = async () => {
  const response = await fetch(`${process.env.API_URL}api/products`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  return response.json();
};
*/

const Banner = () => {
  // const { banner } = await getData();
  return (
    <div className="bg-[#115061] text-themeWhite py-20">
      <Container className="flex items-center justify-between gap-10">
        <div className="flex flex-col gap-y-3">
          <p className="text-xs font-semibold tracking-wide text-themeWhite/90">
            Starting at $274.00
          </p>
          <h1 className="max-w-[600px] text-xs md:text-3xl lg:text-6xl font-semibold">
            The best tablet collection 2024
          </h1>
          <p className="font-bodyFont text-xs md:text-2xl">
            Exclusive offers <span className="text-[#ebd63a]">-35%</span> off
            this week
          </p>
          <Button
            href="/products"
            className="w-32 px-0 flex items-center justify-center gap-1 py-2 text-sm 
             bg-themeWhite text-black hover:text-themeWhite hover:bg-transparent rounded-md border hover:border-themeWhite"
          >
            Shop now <GoArrowRight size={25} />
          </Button>
        </div>
        <div>
          <Image
            src={BannerOneImage}
            alt="BannerOneImage"
            className="w-40 md:w-80"
          />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
