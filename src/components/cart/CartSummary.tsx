import { useEffect, useState } from "react";
import Title from "../Title";
import Button from "../ui/Button";
import { ProductType, StateType } from "../../../type";
import PriceFormatted from "../PriceFormatted";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";

interface cartPrpos {
  cart: ProductType[];
}
const CartSummary = ({ cart }: cartPrpos) => {
  const [totaleamount, setTotalamount] = useState(0);
  const [discountprice, setDiscountprice] = useState(0);
  useEffect(() => {
    let amount = 0;
    let discount = 0;
    {
      cart?.map((item) => {
        amount += item?.price * item?.quantity;
        discount +=
          ((item?.price * item?.discountPercentage) / 100) * item?.quantity;
      });
      setTotalamount(amount);
      setDiscountprice(discount);
    }
  }, [cart]);
  const { data: session } = useSession();

  const stripePromise = loadStripe(
    "pk_test_51Q0jwXJwegIscnyF2Z0OkeGyeaAEDaAekoQ5Me8SpcfDnbQDdYeAOSS2IropeuoWLZQyQJHGDs9CS07NRYIHQU6q00clUrYbKj"
  );
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: cart,
        email: session?.user?.email,
      }),
    });
    const checkoutSession = await response.json();

    const result: any = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.id,
    });

    if (result.error) {
      alert(result?.error?.message);
    }
  };

  return (
    <div className="flex flex-col gap-7  bg-gray-300 px-4 py-10 sm:p-6 lg:col-span-5 mt-16 lg:mt-0 rounded-lg">
      <Title>Cart Summary</Title>
      <div className="flex items-center justify-between">
        <Title className="text-lg font-medium">Subtotal</Title>
        <PriceFormatted amount={totaleamount + discountprice} />
      </div>
      <div className="flex items-center justify-between">
        <Title className="text-lg font-medium">DiscountPrice</Title>
        <PriceFormatted amount={discountprice} />
      </div>
      <div className="flex items-center justify-between">
        <Title className="text-lg font-medium">payble Amount</Title>
        <PriceFormatted
          amount={totaleamount}
          className="text-lg font-semibold"
        />
      </div>
      <Button
        onClick={handleCheckout}
        className="rounded-md bg-black text-white hover:bg-yellow-400 hover:text-black duration-300"
      >
        Checkout
      </Button>
    </div>
  );
};

export default CartSummary;
