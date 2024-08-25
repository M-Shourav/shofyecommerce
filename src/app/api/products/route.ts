import { banner } from "@/app/constants";
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({
    banner: banner,
    status: "success",
    message: "keep alive !",
  });
};
