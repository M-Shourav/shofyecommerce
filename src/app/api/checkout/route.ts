import { NextResponse, NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const requestBody = await request.json();
    const { cart, email } = requestBody;
    return NextResponse.json({
      status: "200",
      success: true,
      message: "Server is Connect",
      email: email,
      cart: cart,
    });
  } catch (error) {
    console.log(error);
  }
};
