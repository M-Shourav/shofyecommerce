"use client";
import { useSelector } from "react-redux";
import { StateType } from "../../../type";
import Container from "@/components/Container";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";

const CartProducts = () => {
  const { cart } = useSelector((state: StateType) => state?.shopy);
  return (
    <Container className="w-full  py-10 lg:py-24 flex items-start justify-between gap-5">
      <div className="flex flex-col gap-y-9">
        {cart?.map((item) => (
          <div key={item?.id} className="grid grid-cols-6 place-items-center">
            <Image
              src={item?.images[0]}
              alt="imagelogo"
              width={200}
              height={200}
              className="w-16 h-16"
            />
            <p className="text-start">{item?.title}</p>
            <p>$ {item?.price}</p>
            <button className="text-2x hover:text-red-500 cursor-pointer duration-200">
              <RiDeleteBin6Line />
            </button>
          </div>
        ))}
      </div>
      <div>Subtotale</div>
    </Container>
  );
};

export default CartProducts;
