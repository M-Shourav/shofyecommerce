import { NotFoundpage } from "@/assets";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

const NotFoundPage = () => {
  return (
    <Container className="flex items-center justify-center py-10">
      <div className="flex flex-col items-center gap-y-3">
        <Image src={NotFoundpage} alt="NotFoundPage" className="max-w-40" />
        <p className="text-3xl font-semibold">
          Oops, looks like the page is lost.
        </p>
        <p className="text-sm text-gray-500">
          This is not a fault, just an accident that was not intentional.
        </p>
        <Button href="/">Back to Home</Button>
      </div>
    </Container>
  );
};

export default NotFoundPage;
