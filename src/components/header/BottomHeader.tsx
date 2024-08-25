import { navigation } from "@/app/constants";
import Container from "../Container";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const BottomHeader = () => {
  return (
    <div className="border-t-[1px] shadow-lg ">
      <Container className="flex items-center justify-between py-1 ">
        <div className="hidden md:inline-flex items-center gap-5 text-sm font-semibold">
          {navigation?.map((item) => (
            <Link
              key={item?.title}
              className="flex items-center gap-x-1 text-gray-600 hover:text-themeColor duration-200"
              href={item?.href}
            >
              {item?.title} <IoIosArrowDown />
            </Link>
          ))}
        </div>
        <div className="hidden md:inline-flex items-center gap-x-3">
          <FiPhone className="text-2xl text-themeColor" />
          <div className="flex flex-col text-xs font-semibold">
            <p className="text-gray-600 font-medium">Hotline:</p>
            <Link
              className="text-sm text-gray-800 hover:text-themeColor duration-200"
              href="tel:+8801710267985"
            >
              +88 01710267985
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BottomHeader;
