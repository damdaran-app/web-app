"use client";
import { productDetailNavigationStore } from "@/utils/store";
import { FC, useEffect } from "react";

interface TData {
  link: string;
  text: string;
}

interface IProps {
  data: TData[];
}

const TabNavigateComp: FC<IProps> = ({ data }) => {
  const { link, changeLink } = productDetailNavigationStore();
  useEffect(() => {
    changeLink("aboutProduct")
  }, [])
  return (
    <div className="tab-navigate-comp w-full flex gap-2.5">
      {data.map((item, index) => (
        <button
          key={index}
          className={`transition-all text-xs ${
            item.link == link ? "bg-dark text-yellow" : "bg-white text-dark"
          } p-3 cursor-pointer rounded-t-2xl`}
          onClick={() => changeLink(item.link)}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
};

export default TabNavigateComp;
