"use client";
import { navBarData } from "@/utils/constant";
import { useGetDataFromLocalStorage } from "@/utils/hook/useGetDataFromLocalStorage";
import { deleteTokenAction } from "@/utils/server-actions";
import { motion } from "framer-motion";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { FC, startTransition, useActionState, useEffect, useState } from "react";

interface TProps {
  isOpen: boolean;
  toggel?: () => void;
}

const Sidebar: FC<TProps> = ({ isOpen, toggel }) => {
  const pathName = usePathname();
  const token = useGetDataFromLocalStorage("mehrabProjectToken", "false");

  const [actionInitialState] = useState<{
    message: "" | "deleted";
  }>({ message: "" });
  const [state, action] = useActionState(deleteTokenAction, actionInitialState);

  const btnClickHandler = () => {
    if (token && token != "") {
      startTransition(() => action());
      localStorage.removeItem("mehrabProjectToken");
    } else {
      redirect("/auth/sign-in");
    }
  };

  useEffect(() => {}, [state])

  if (isOpen) {
    return (
      <div className="fixed top-0 left-0 w-full h-full">
        <div
          className="overlay w-full h-full bg-black/50"
          onClick={() => toggel?.()}
        ></div>
        <motion.div
          initial={{ right: -200 }}
          animate={{ right: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="items-control w-[180px] h-full bg-white text-black absolute top-0 right-0 pr-8 pt-10 flex flex-col gap-y-3.5"
        >
          {navBarData.map((item, index) => {
            return (
              <Link key={index} href={item.link}>
                <h1
                  className={`p-1.5 pr-3 rounded-r-2xl transition-all ${pathName == item.link ? "bg-black text-white" : "hover:bg-black/10"}`}
                >
                  {item.text}
                </h1>
              </Link>
            );
          })}
          <button
            className={`${
              token && token != ""
                ? "bg-red-500/20 text-red-700 p-2 text-[15px] rounded-xl ml-2 mt-8 cursor-pointer"
                : "bg-green-500/20 text-green-700 p-2 text-[15px] rounded-xl ml-2 mt-8 cursor-pointer"
            }`}
            onClick={btnClickHandler}
          >
            {token && token != "" ? "خروج از حساب" : "ورود / ثبت نام"}
          </button>
        </motion.div>
      </div>
    );
  } else {
    <></>;
  }
};

export default Sidebar;
