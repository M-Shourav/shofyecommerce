import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ProductType, StateType } from "../../../type";

interface Props {
  item: ProductType;
}
const QuantityButton = ({ item }: Props) => {
  let quantity = 1;
  const [Price, setPrice] = useState(item?.price);
  const handlePlus = () => {
    if (quantity > 1) {
      setPrice(Price + Price);
    }
  };

  const handleMinus = () => {
    if (quantity == 1) {
      alert("not less than 1");
    } else {
      setPrice(Price - Price);
    }
  };
  return (
    <>
      <p>{Price}</p>
      <div className="flex items-center gap-3 text-lg border-2 px-2 lg:px-5 lg:py-2 rounded-full">
        <button onClick={handleMinus}>
          <FaMinus />
        </button>
        <span>{Price}</span>
        <button onClick={handlePlus}>
          <FaPlus />
        </button>
      </div>
    </>
  );
};

export default QuantityButton;
