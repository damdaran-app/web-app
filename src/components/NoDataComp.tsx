"use client";
import Lottie from "lottie-react";
import animation1 from "../animation/Empty Box Animation.json";
import { samimBold } from "./fonts";

const NoDataComp = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <Lottie animationData={animation1} loop className="w-[300px] h-[300px]" />
      <p className={`${samimBold.className} absolute bottom-6 text-3xl`}>
        موردی یافت نشد!!
      </p>
    </div>
  );
};

export default NoDataComp;
