import React from "react";
import Container from "../Container";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const TopHeader = () => {
  return (
    <div className="w-full bg-black text-gray-200 ">
      <Container className="flex items-center justify-between">
        <p className="w-full md:w-auto flex items-center justify-center md:justify-normal text-xs font-semibold py-1">
          <CiDeliveryTruck className="text-2xl text-iconBg mr-1" />
          FREE Express Shipping On Orders $570+
        </p>
        <div className="hidden md:inline-flex items-center gap-x-5 text-sm font-medium">
          <p className="ToHeaderMenu">
            English <MdOutlineKeyboardArrowDown />
          </p>
          <p className="ToHeaderMenu">
            USD <MdOutlineKeyboardArrowDown />
          </p>
          <p className="ToHeaderMenu">
            Setting <MdOutlineKeyboardArrowDown />
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
