"use client";
import { useSelector } from "react-redux";
import { ProductType, StateType } from "../../../type";
import Container from "../Container";
import CartProduct from "./CartProduct";
import CartSummary from "./CartSummary";
import Button from "../ui/Button";
const CartProducts = () => {
  const { cart } = useSelector((state: StateType) => state?.shopy);
  return (
    <Container>
      {cart?.length > 0 ? (
        <>
          <h1 className="text-3xl text-gray-900 tracking-tight sm:text-4xl font-bold">
            Shoping Cart
          </h1>
          <div className="mt-10  lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
            <section className=" col-span-7">
              <div className=" divide-y divide-gray-400 border-t border-b border-gray-400">
                {cart?.map((product: ProductType) => (
                  <CartProduct key={product?.id} product={product} />
                ))}
              </div>
            </section>
            <CartSummary />
          </div>
        </>
      ) : (
        <div
          className="h-96  my-10 flex flex-col items-center justify-center gap-4 bg-white
       py-5 border border-green-200 drop-shadow-2xl"
        >
          <h1 className="text-3xl text-gray-900 tracking-tight sm:text-4xl font-bold">
            Shoping Cart
          </h1>
          <p className="max-w-[700px] mx-auto text-center text-gray-600 tracking-wide leading-6">
            Your Cart Is Empty.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. A maiores deleniti debitis perferendis doloribus
            reiciendis, similique iure earum dolores, rem itaque! Ab atque
            dolores similique officia possimus eos nemo qui sint eveniet! Nam
            repellat necessitatibus id iste, eum blanditiis vel, voluptatibus
            quam, corrupti aut molestias? Consectetur quidem impedit esse,
          </p>
          <Button href="/">Got to Shoping</Button>
        </div>
      )}
    </Container>
  );
};

export default CartProducts;
