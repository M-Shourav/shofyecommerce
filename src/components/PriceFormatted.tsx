import { twMerge } from "tailwind-merge";

interface Props {
  amount: number;
  className?: string;
}

const PriceFormatted = ({ amount, className }: Props) => {
  const FormatedPrice = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return (
    <span className={twMerge("font-medium", className)}>{FormatedPrice}</span>
  );
};

export default PriceFormatted;
