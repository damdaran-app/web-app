"use client";
import { TFilteringSort } from "@/utils/types/api-responses-types";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { FC, useState } from "react";

interface dataMap {
  _id: string;
  name: string;
  __v: number;
}

interface IProps {
  isSelect: boolean;
  dataMap: dataMap[];
  className?: string;
  boxClassName?: string;
  onClick: (data: TFilteringSort) => void;
}

const SelectOptionComp: FC<IProps> = ({
  dataMap,
  onClick,
  className,
  boxClassName,
}) => {
  const [selectedKeys, setSelectedKeys] = useState<string>(dataMap[0].name);

  return (
    <Dropdown
      classNames={{
        content: `bg-[#1c1c1c] text-white p-1 rounded-xl shadow-xl border border-[#2a2a2a] ${boxClassName}`,
      }}
      shouldBlockScroll={false}
    >
      <DropdownTrigger>
        <Button
          variant="bordered"
          className={`capitalize
            bg-[#111] 
            text-white
            border-[#2a2a2a] 
            rounded-xl
            px-4 
            h-10
            font-semibold ${className}`}
        >
          {selectedKeys}
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        disallowEmptySelection
        aria-label="Single selection example"
        selectedKeys={selectedKeys}
        selectionMode="single"
        classNames={{
          list: `
            max-h-[200px]
            overflow-y-auto
            scrollbar-thin
            scrollbar-thumb-[#3a3a3a]
            scrollbar-track-transparent
          `,
        }}
        itemClasses={{
          base: `
            data-[hover=true]:bg-[#2a2a2a] data-[hover=true]:text-white
            text-white
            rounded-lg
            px-3
            py-2
            text-[15px]
          `,
        }}
      >
        {dataMap.map((item, index) => {
          return (
            <DropdownItem
              key={index}
              onClick={() => {
                setSelectedKeys(item.name);
                onClick(item);
              }}
              className="text-black"
            >
              {item.name}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};

export default SelectOptionComp;
