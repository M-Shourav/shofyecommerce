"use client";
import Image from "next/image";
import Container from "../Container";
import { logo } from "@/assets";
import { useEffect, useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import { RiMenu3Fill, RiUserLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut, useSession } from "next-auth/react";
import { StateType } from "../../../type";
import { addUser, removeUser } from "@/app/redux/shofySlice";

const MiddleHeader = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const { cart } = useSelector((state: StateType) => state?.shopy);
  useEffect(() => {
    if (session?.user) {
      dispatch(addUser(session?.user));
    } else {
      dispatch(removeUser());
    }
  }, [session?.user, dispatch]);

  return (
    <Container className="flex items-center justify-between gap-5 py-5">
      <div>
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-28" />
        </Link>
      </div>
      <div className="hidden md:inline-flex flex-1 border-2 border-themeColor h-10 relative">
        <input
          type="text"
          placeholder=" search of products..."
          className="w-full outline-none px-4"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        {searchValue && (
          <span
            onClick={() => setSearchValue("")}
            className="absolute top-2.5 right-16 text-xl cursor-pointer hover:text-red-600 duration-200"
          >
            <IoClose />
          </span>
        )}

        <span
          className="absolute top-0 right-0 text-xl text-white
        w-10 h-full flex items-center justify-center   bg-themeColor/80
        hover:bg-themeColor cursor-pointer duration-200 "
        >
          <IoSearch />
        </span>
      </div>
      <div>
        <div className="flex items-center gap-7">
          {session?.user ? (
            <div className="hidden md:inline-flex items-center gap-x-2 ">
              <Image
                src={session?.user?.image!}
                alt="userImage"
                width={200}
                height={200}
                className="w-12 h-12 rounded-full"
              />

              <div className="">
                <p className="text-xs font-medium text-gray-500">
                  Hello {session?.user?.name}
                </p>
                <Link href={"/profile"}>View Profile</Link>
              </div>
            </div>
          ) : (
            <div
              onClick={() => signIn()}
              className="hidden md:inline-flex items-center gap-x-2 cursor-pointer "
            >
              <span className="w-10 h-10  flex items-center justify-center text-2xl border-2 border-black rounded-full">
                <RiUserLine />
              </span>
              <div className="flex flex-col">
                <p className="text-xs font-medium text-gray-500">Hello,Guest</p>
                <p className="text-[13px] font-semibold">Your Account</p>
              </div>
            </div>
          )}
          <Link
            href={"/favorite"}
            className="relative hover:text-themeColor duration-200"
          >
            <span className="text-2xl ">
              <FiHeart />
            </span>
            <span
              className="w-5 h-5 bg-themeColor rounded-full flex items-center justify-center
             text-white text-xs absolute -top-2 -right-2 "
            >
              0
            </span>
          </Link>
          <Link
            href={"/cart"}
            className="relative hover:text-themeColor duration-200 text-2xl "
          >
            <BsBag />
            <span
              className="w-5 h-5 bg-themeColor rounded-full flex items-center justify-center
              text-white text-xs absolute -top-2 -right-2 "
            >
              {cart?.length > 0 ? cart?.length : "0"}
            </span>
          </Link>

          <div
            className="md:hidden inline-flex text-3xl cursor-pointer
          hover:text-themeColor duration-200"
          >
            <RiMenu3Fill />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MiddleHeader;
