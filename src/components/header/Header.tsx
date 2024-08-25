import React from "react";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import BottomHeader from "./BottomHeader";

const Header = () => {
  return (
    <>
      <TopHeader />
      <MiddleHeader />
      <header className=" sticky top-0 z-50 bg-themeWhite">
        <BottomHeader />
      </header>
    </>
  );
};

export default Header;
