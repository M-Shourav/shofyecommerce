import { logo } from "@/assets";
import Image from "next/image";

const MainLoader = () => {
  return (
    <div
      className="w-full min-h-screen absolute top-0 left-0 bg-white
     text-darkText z-50 flex flex-col gap-2 items-center justify-center"
    >
      <div className="w-52 p-4 rounded-lg relative flex items-center justify-center">
        <Image
          src={logo}
          alt="logo_image"
          className="w-40 h-auto object-contain"
        />
      </div>
      <span className="w-14 h-14 border-8 border-grays rounded-full relative">
        <span
          className=" absolute -top-2 -left-2 w-14 h-14 border-8 border-r-themeColor 
        border-transparent rounded-full animate-spin"
        />
      </span>
      <p className="text-xl font-semibold text-themeColor tracking-wide text-center">
        Loading
        <span className="animate-bounce">.</span>
        <span className=" animate-ping">.</span>
        <span className=" animate-ping">.</span>
        <span className=" animate-ping">.</span>
      </p>
    </div>
  );
};

export default MainLoader;
