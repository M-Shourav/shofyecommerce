import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-x-2 text-xl">
      <Link
        href={"https://www.facebook.com/profile.php?id=100027878711748"}
        target="blank"
        className="text-xl bg-lightBg border-2 p-3 text-black cursor-pointer rounded-md hover:text-white hover:bg-themeColor
       hover:border-themeWhite shadow-lg duration-200"
      >
        <FaFacebookF />
      </Link>
      <Link
        href={"https://x.com/MasumAh68543"}
        target="blank"
        className="text-xl bg-lightBg border-2 p-3 text-black cursor-pointer rounded-md hover:text-white hover:bg-themeColor
       hover:border-themeWhite shadow-lg duration-200"
      >
        <BsTwitterX />
      </Link>
      <Link
        href={"https://www.instagram.com/masum_shourav/"}
        target="blank"
        className="text-xl bg-lightBg border-2 p-3 text-black cursor-pointer rounded-md hover:text-white hover:bg-themeColor
       hover:border-themeWhite shadow-lg duration-200"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        href={"https://www.instagram.com/masum_shourav/"}
        target="blank"
        className="text-xl bg-lightBg border-2 p-3 text-black cursor-pointer rounded-md hover:text-white hover:bg-themeColor
       hover:border-themeWhite shadow-lg duration-200"
      >
        <SlSocialInstagram />
      </Link>
    </div>
  );
};

export default SocialLinks;
