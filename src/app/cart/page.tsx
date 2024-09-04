"use client";
import CartProducts from "@/components/cart/CartProducts";
import Container from "@/components/Container";

const CartPage = () => {
  return (
    <Container className="py-10">
      <CartProducts />
    </Container>
  );
};

export default CartPage;
