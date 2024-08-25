const AddToCartButton = () => {
  return (
    <div
      className=" text-center 
        overflow-hidden "
    >
      <button className="w-full bg-black hover:bg-themeColor py-1 text-themeWhite transform translate-y-10 group-hover:translate-y-0 duration-300">
        Add to cart
      </button>
    </div>
  );
};

export default AddToCartButton;
