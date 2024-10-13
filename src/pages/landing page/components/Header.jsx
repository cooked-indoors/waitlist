import Image from "next/image";
import React from "react";
import NavItems from "./NavItems";
import MobileSidebar from "./MobileSidebar";
import { AnimatePresence } from "framer-motion";
import { Bars3Icon } from "@heroicons/react/24/outline";
import useClickAway from "../../../hooks/useClickAway";
import CustomBtn from "./CustomBtn";

const Header = () => {
  const {
    ref: navRef,
    isOpen: openNav,
    setIsOpen: setOpenNav,
  } = useClickAway();

  const onOpenNav = () => {
    setOpenNav(true);
  };

  const onCloseNav = () => {
    setOpenNav(false);
  };

  return (
    <>
      <div className="container flex items-center justify-between py-14">
        <div className=" w-[150px] md:w-[230px] h-[48px] relative">
          <Image
            src={"/web-logo.svg"}
            alt="logo"
            // width={230}
            // height={48}
            className="cursor-pointer"
            layout="fill"
          />
        </div>

        <Bars3Icon
          className="w-8 h-8 cursor-pointer lg:hidden"
          onClick={onOpenNav}
          color="#1D319A"
        />

        <div className="hidden lg:block">
          <NavItems className={"items-center"} />
        </div>

        <div className="hidden lg:block">
        <a href="https://wa.me/2349132939487">
          <CustomBtn text={"Order Now"} />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {openNav && (
          <MobileSidebar
            isOpen={openNav}
            navRef={navRef}
            onCloseNav={onCloseNav}
          >
            <>
              <NavItems
                //  onCloseNav={onCloseNav}
                className="flex-col items-start"
              />
              <div className="mt-6">
              <a href="https://wa.me/2349132939487">
                <CustomBtn className="w-full" text={"Order Now"} />
                </a>
              </div>
            </>
          </MobileSidebar>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
