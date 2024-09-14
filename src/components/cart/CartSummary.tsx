import { useEffect, useState } from "react";
import Title from "../Title";
import Button from "../ui/Button";
import { useSelector } from "react-redux";
import { StateType } from "../../../type";
import PriceFormatted from "../PriceFormatted";

const CartSummary = () => {
  const { cart } = useSelector((state: StateType) => state?.shopy);
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
      <Button className="rounded-md bg-black text-white hover:bg-yellow-400 hover:text-black duration-300">
        Checkout
      </Button>
    </div>
  );
};

export default CartSummary;
