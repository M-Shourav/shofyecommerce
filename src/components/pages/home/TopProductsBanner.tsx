import { product1, product2, product3, product4, product5 } from "@/assets";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import Banner from "./Banner";

const ProductsArr = [
  {
    image: product1,
    title: "Headphone",
    description: "20 products",
    href: "/products",
  },
  {
    image: product2,
    title: "Mobile Phone",
    description: "25 products",
    href: "/products",
  },
  {
    image: product3,
    title: "CPU Heat-Pipes",
    description: "57 products",
    href: "/products",
  },
  {
    image: product4,
    title: "Smart Watch",
    description: "44 products",
    href: "/products",
  },
  {
    image: product5,
    title: "With Bluetooth",
    description: "81 products",
    href: "/products",
  },
];

const TopProductsBanner = () => {
  return (
    <div className="bg-[#FEFEFF]">
      <Container className="py-10 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-3 items-start">
          {ProductsArr?.map((item) => (
            <Link
              href={item?.href}
              key={item?.title}
              className="flex flex-col gap-y-2 w-full items-center h-[250px] py-4 group"
            >
              <div
                className=" bg-productsBg w-[160px] h-[180px] flex items-center
               justify-center rounded-full "
              >
                <Image
                  src={item?.image}
                  alt="product logo"
                  className=" scale-100 group-hover:scale-110 duration-300 p-1"
                />
              </div>
              <div className="mt-2 text-center">
                <p className="text-base font-semibold hover:text-lightblue duration-200">
                  {item?.title}
                </p>
                <p className="text-sm text-gray-500">{item?.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TopProductsBanner;
