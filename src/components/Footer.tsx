import Image from "next/image";
import Container from "./Container";
import { logo } from "@/assets";
import SocialLinks from "./SocialLinks";
import Title from "./Title";
import { informationArray, myAccountArr } from "@/app/constants";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { CgMail } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="py-10 lg:py-20 bg-lightBg">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-10">
        <div className="flex flex-col gap-y-5">
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
          <p>
            We are a team of designers and developers that create high quality
            WordPress
          </p>
          <SocialLinks />
        </div>
        <div className="">
          <Title className="text-">My Account</Title>
          <div className="flex flex-col gap-y-2 mt-3">
            {myAccountArr?.map((item) => (
              <Link
                key={item?.title}
                href={item?.href}
                className="flex items-center gap-x-1 text-sm font-medium
                 text-gray-500 hover:text-themeColor duration-200"
              >
                <GoDotFill size={10} />
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Title>Information</Title>
          <div className="flex flex-col gap-y-2 mt-3">
            {informationArray?.map((item) => (
              <Link
                key={item?.title}
                href={item?.href}
                className="flex items-center gap-x-1 text-sm font-medium
                 text-gray-500 hover:text-themeColor duration-200"
              >
                <GoDotFill size={10} />
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Title>Talk to Us</Title>
          <div className="flex flex-col mt-3 text-xs font-semibold">
            <p className="text-xs font-medium">Got Questions? Call us</p>
            <Link
              className=" py-1 text-xl hover:text-themeColor duration-200"
              href={"tel:+8801710267985"}
            >
              +88-01710267985
            </Link>
            <div className="mt-3">
              <Link
                href={"mailto:muhammadshourav@gmail.com"}
                className="flex items-center gap-x-1 text-sm text-gray-500 font-medium hover:text-themeColor duration-200"
              >
                <CgMail />
                muhammadshourav625@gmail.com
              </Link>
              <Link
                href={"#"}
                className="flex items-center gap-x-1 text-sm text-gray-500 font-medium hover:text-themeColor duration-200"
              >
                <IoLocationOutline /> Dhaka,Bangladesh
              </Link>
            </div>
          </div>
        </div>
      </Container>
      ;
    </div>
  );
};

export default Footer;
