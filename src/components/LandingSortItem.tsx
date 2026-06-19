"use client";
import {
  TFilteringSort,
  TypeDataType,
} from "@/utils/types/api-responses-types";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import DeleteIcon from "../assets/photos/delete.png";
import CustomBtn from "./CustomBtn";
import SelectOptionComp from "./SelectOptionComp";

interface IProps {
  sortData: TypeDataType[];
  sortClickHandle: (item: TFilteringSort) => void;
  deleteFilterClick: () => void;
}

const LandingSortItem: FC<IProps> = ({
  sortData,
  sortClickHandle,
  deleteFilterClick,
}) => {
  const [typeState] = useState<string | null>(null);

  return (
    <div className="filter-items-control w-full flex items-center justify-between">
      <div className="right max-md:w-full flex flex-wrap items-center gap-x-3 max-md:flex-col">
        <span className="">نمایش محصولات براساس نوع محصول :</span>
        <div className="select-option-section flex items-center justify-center gap-4 max-md:w-full max-md:mt-4">
          <div className="select-option-control bg-white flex items-center pl-2.5 rounded-2xl">
            <SelectOptionComp
              dataMap={sortData}
              isSelect={false}
              className="bg-white text-black"
              boxClassName="bg-white text-black"
              onClick={(item) => sortClickHandle(item)}
            />
            <Image
              src={DeleteIcon.src}
              width={400}
              height={400}
              alt=""
              className="w-[30px] h-[20px] cursor-pointer"
              onClick={deleteFilterClick}
            />
          </div>
          <Link href={"/products"} className="max-md:block hidden">
            <CustomBtn
              text="مشاهده همه"
              className="bg-dark text-white cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <div className="left max-md:hidden block">
        <Link href={"/products"}>
          <CustomBtn
            text="مشاهده همه"
            className="bg-dark text-white cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default LandingSortItem;
