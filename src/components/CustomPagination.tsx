"use client";
import { Pagination } from "@heroui/react";
import { FC } from "react";

interface IProps {
  page: number;
  total: number;
  onChange: (page: number) => void;
}

const CustomPagination: FC<IProps> = ({ page, total, onChange }) => {
  return (
    <div dir="rtl" className="flex justify-center mt-6">
      <Pagination
        showControls
        initialPage={1}
        page={page}
        total={total}
        onChange={(page) => onChange(page)}
        classNames={{
          wrapper: "flex gap-3 max-md:gap-1 items-center cursor-pointer p-0",

          item: `
            w-10 h-10 max-md:w-7 max-md:h-7
            flex items-center justify-center
            rounded-full
            text-black
            bg-transparent
            hover:bg-gray-200
            transition-colors
          `,

          cursor: `
            w-10 h-10 max-md:w-7 max-md:h-7
            flex items-center justify-center
            rounded-full
            bg-black
            text-yellow-400
            font-medium
          `,

          prev: `
            w-10 h-10 max-md:w-7 max-md:h-7
            flex items-center justify-center
            rounded-full
            bg-transparent
            text-black
            hover:bg-gray-200
            rotate-[-180deg]
          `,

          next: `
            w-10 h-10 max-md:w-7 max-md:h-7
            flex items-center justify-center
            rounded-full
            bg-transparent
            text-black
            hover:bg-gray-200
          `,
        }}
      />
    </div>
  );
};

export default CustomPagination;
