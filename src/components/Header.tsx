"use client";
import { TLandingReport } from "@/utils/types";
import shabnameFDLocal from "next/font/local";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import HeaderImage from "../assets/photos/header-image.png";
import CustomBtn from "./CustomBtn";
import { samim } from "./fonts";
import NavBar from "./NavBar";
import CustomModal from "./modal/CustomModal";
import { ModalStore } from "@/utils/store";
import { copyText } from "@/utils/hook/copyText";
import { motion } from "framer-motion";

const shabnam = shabnameFDLocal({
  src: "../assets/fonts/Shabnam-FD.ttf",
});

interface TProps {
  data: TLandingReport;
}

const Header: FC<TProps> = ({ data }) => {
  const pathName = usePathname();
  const [pathNameValidation, setPathNameValidation] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [copyStatus, setCopyStatus] = useState<boolean>(false);
  const [isOnline] = useState<boolean>(
    typeof window != "undefined" ? window.navigator.onLine : false,
  );
  const { isOpen, change } = ModalStore();

  const checkUserNetwork = () => {
    if (typeof window != "undefined") {
      if (window.navigator.onLine) {
        setIsError(true);
      } else {
        setIsError(false);
      }
    }
  };

  useEffect(() => {
    checkUserNetwork();
  }, [isOnline]);

  useEffect(() => {
    setPathNameValidation(pathName.includes("auth"));
  }, [pathName]);

  const handleCopyPhoneNumber = async () => {
    const result = await copyText("09112800689");
    result ? setCopyStatus(true) : setCopyStatus(false);
    setTimeout(() => {
      change(false);
      setCopyStatus(false)
    }, 2000);
  };

  if (isError) {
    if (!pathNameValidation) {
      switch (pathName) {
        case "/":
          return (
            <div className="heaer pt-6 pb-18 relative bg-black px-10 max-881px:px-0">
              <div
                className="overlay max-881px:block absolute top-0 lef0 w-full h-full hidden max-881px:bg-[url('/photos/header-image.png')]
                bg-no-repeat
                bg-[size:300px,240px]
                bg-center opacity-20 z-0"
              ></div>
              <div className="navbar-control relative z-10">
                <NavBar pathName={pathName} />
              </div>
              <div className="bottom flex justify-center mt-12 z-10">
                <div className="items-control w-4/5 max-881px:w-full flex items-center max-881px:justify-center min-881px:gap-x-5">
                  <div className="text-control max-881px:px-2 max-881px:flex flex-col items-center max-881px:text-center">
                    <h1
                      className={`text-white text-[29px] font-bold ${samim.className}`}
                    >
                      {data?.headingText?.startTitle}
                      <span className="text-yellow-400">
                        {data?.headingText?.clicheTitle}{" "}
                      </span>
                      {data?.headingText?.endTitle}
                    </h1>
                    <h2 className="text-white text-[18px] mt-4 max-881px:leading-10">
                      {data?.headingText?.description}
                    </h2>
                    <CustomBtn
                      text="تماس برای مشاوره رایگان !"
                      className={`bg-[#EBE719] text-[#2D2D2D] font-bold mt-8 cursor-pointer relative ${shabnam.className}`}
                      onClick={() => change(true)}
                    />
                  </div>
                  <div className="image-control">
                    <Image
                      src={HeaderImage}
                      alt=""
                      width={550}
                      className="max-881px:hidden block"
                    />
                  </div>
                </div>
              </div>
              <CustomModal
                isOpen={isOpen}
                toggel={() => {
                  change(false);
                }}
              >
                <div className="w-full flex flex-col gap-3 items-center">
                  <p className="text-[22px] text-black mt-4 max-sm:text-lg">
                    شماره تماس مشاوره : 09112800689
                  </p>
                  {copyStatus ? (
                    <motion.button
                      className="text-black text-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      شماره کپی شد
                    </motion.button>
                  ) : (
                    <CustomBtn
                      text={copyStatus ? "" : "جهت کپی کردن شماره کلیک کنید"}
                      className="text-[14px] bg-black text-yellow rounded-xl cursor-pointer mt-3"
                      onClick={() => handleCopyPhoneNumber()}
                    />
                  )}
                </div>
              </CustomModal>
            </div>
          );
        default:
          return (
            <div className="navbar-control px-10 max-md:px-0 bg-lightGray p-3">
              <NavBar pathName={pathName} />
            </div>
          );
      }
    } else {
      return <></>;
    }
  } else {
    <></>;
  }
};

export default Header;
