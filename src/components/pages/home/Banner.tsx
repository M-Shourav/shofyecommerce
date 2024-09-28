"use client";
import { Slider_1, Slider_2, Slider_3 } from "@/assets";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={5000}
      transitionTime={2500}
    >
      <div className=" bg-bannerbg text-themeWhite py-10 relative">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-start flex flex-col gap-y-3">
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
              Shop now
            </Button>
          </div>
          <div>
            <Image src={Slider_1} alt="slider1" className="w-40 md:w-80" />
          </div>
        </Container>
      </div>
      <div className=" bg-bannerbg text-themeWhite py-10 relative">
        <Container className="flex flex-col md:flex-row  items-center justify-between gap-10">
          <div className="text-start flex flex-col gap-y-3">
            <p className="text-xs font-semibold tracking-wide text-themeWhite/90">
              Starting at $999.00
            </p>
            <h1 className="max-w-[600px] text-xs md:text-3xl lg:text-6xl font-semibold">
              The best note book collection 2024
            </h1>
            <p className="font-bodyFont text-xs md:text-2xl">
              Exclusive offers <span className="text-[#ebd63a]">-10%</span> off
              this week
            </p>
            <Button
              href="/products"
              className="w-32 px-0 flex items-center justify-center gap-1 py-2 text-sm 
             bg-themeWhite text-black hover:text-themeWhite hover:bg-transparent rounded-md border hover:border-themeWhite"
            >
              Shop now
            </Button>
          </div>
          <div>
            <Image src={Slider_2} alt="slider1" className="w-40 md:w-80" />
          </div>
        </Container>
      </div>
      <div className=" bg-grays text-darkText py-10">
        <Container className="flex flex-col md:flex-row  items-center justify-between gap-10">
          <div className="text-start flex flex-col gap-y-3">
            <p className="text-xs  tracking-wide text-darkText">
              Starting at <span className="text-sm font-semibold">$999.00</span>
            </p>
            <h1 className="max-w-[600px] text-xs md:text-3xl lg:text-6xl font-semibold">
              The best note book collection 2024
            </h1>
            <p className="font-bodyFont text-xs md:text-2xl">
              Exclusive offers <span className="text-[#e3301c]">-10%</span> off
              this week
            </p>
            <Button
              href="/products"
              className="w-32 px-0 flex items-center justify-center gap-1 py-2 text-sm 
             bg-themeWhite text-black hover:text-themeWhite hover:bg-themeColor rounded-md border hover:border-themeWhite duration-300"
            >
              Shop now
            </Button>
          </div>
          <div>
            <Image src={Slider_3} alt="slider1" className="w-40 md:w-80" />
          </div>
        </Container>
      </div>
    </Carousel>
  );
};

export default Banner;
