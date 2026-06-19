"use client";
import { TAboutUse } from "@/utils/types";
import { FC, useState } from "react";
import CustomBtn from "./CustomBtn";
import { samimBold } from "./fonts";

const AboutUse: FC<TAboutUse> = ({ title, description }) => {
  const [showFlag, setShowFlag] = useState<boolean>(false);
  return (
    <div className="about-use-control w-[80%] text-center mt-14">
      <h1
        className={`text-dark text-[28px] ${samimBold.className} max-md:text-xl`}
      >
        {title}
      </h1>
      <h1
        className={`text-dark text-[15px] mt-3 leading-7 ${showFlag ? "" : "line-clamp-3"}`}
      >
        {description}
      </h1>
      <CustomBtn
        text="ادامه مطلب"
        className="border border-border rounded-full cursor-pointer mt-3"
        onClick={() => setShowFlag(!showFlag)}
      />
    </div>
  );
};

export default AboutUse;
