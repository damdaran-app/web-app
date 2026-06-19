"use client";
import { CustomBtn } from "@/components";
import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";

interface IProps {
  dataMap: string[];
  pathName: string;
  className?: string;
  click?: () => void;
}

const DeleteFiltersComp: FC<IProps> = ({
  dataMap,
  pathName,
  className,
  click,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const clickHandler = () => {
    const params = new URLSearchParams(searchParams.toString());
    dataMap.map((el) => params.delete(el));
    router.push(`${pathName}?${params.toString()}`, { scroll: false });
    params.set("RowsOfPage", "5");
    params.set("PageNumber", "1");
    router.push(`${pathName}?${params.toString()}`, { scroll: false });
  };

  return (
    <CustomBtn
      className={`cursor-pointer ${className}`}
      text="حذف فیلترها"
      onClick={() => {
        clickHandler();
        click?.();
      }}
    />
  );
};

export default DeleteFiltersComp;
