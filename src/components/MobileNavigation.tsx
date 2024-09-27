"use client";
import { navigation } from "@/app/constants";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import SocialLinks from "./SocialLinks";

const MobileNavigation = () => {
  let [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div
        onClick={toggleMenu}
        className="text-3xl md:hidden hover:text-themeColor duration-200 cursor-pointer"
      >
        <CiMenuFries />
      </div>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 w-screen p-4 flex items-center justify-center bg-darkText/90">
          <DialogPanel
            transition
            className="w-[94%] bg-darkText/50 text-themeWhite space-y-4 p-6 border
             border-lightBg/40 rounded-md absolute top-10 mt-5"
          >
            <div className="flex items-center justify-between gap-5">
              <h3 className="text-xl font-semibold text-white/80">
                Navigation Menu
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl text-white/80 hover:text-red-500 border
               border-white/80 hover:border-white/60 duration-300 rounded-sm"
              >
                <IoCloseOutline />
              </button>
            </div>
            <div className="flex flex-col items-start text-start gap-5 pt-5">
              {navigation?.map((item) => (
                <Link
                  key={item?.title}
                  href={item?.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-sky-500 w-full duration-200 relative group flex items-center gap-2"
                >
                  <span className="w-2.5 h-2.5 inline-flex rounded-full border border-themeWhite group-hover:border-sky-500" />
                  {item?.title}
                  <span
                    className="w-full absolute left-0 -bottom-1 h-[1px] bg-themeWhite/50
                   group-hover:bg-sky-500 duration-200"
                  />
                </Link>
              ))}
            </div>
            <SocialLinks className="text-base" />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileNavigation;
