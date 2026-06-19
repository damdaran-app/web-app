"use client";
import { formatNumberHandler } from "@/utils/hook/useFormatNumber";
import { IRangeInput } from "@/utils/types";
import { Slider } from "@heroui/react";
import { FC, useEffect, useState } from "react";

const RangeInput: FC<IRangeInput> = ({
  rangeMinValue,
  rangeMaxValue,
  rangeSteper,
  rangeDefaultValue,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState<string[]>([]);

  useEffect(() => {
    if (rangeMinValue && rangeMaxValue) {
      setInputValue([
        formatNumberHandler(rangeMinValue),
        formatNumberHandler(rangeMaxValue),
      ]);
    }
  }, [rangeMinValue, rangeMaxValue]);

  return (
    <>
      <Slider
        label="قیمت"
        minValue={rangeMinValue}
        maxValue={rangeMaxValue}
        step={rangeSteper}
        defaultValue={rangeDefaultValue}
        formatOptions={{
          style: "decimal",
        }}
        classNames={{
          base: "w-full flex flex-col-reverse rounded-full relative top-[16px]",
          label: "hidden",
          value: "hidden",
          trackWrapper: "h-[5px] rounded-full",
          track: "bg-gray-200 h-full",
          filler: "w-full h-full bg-yellow",
          thumb:
            "w-4 h-4 bg-white border-4 border-black shadow-md rounded-full bottom-[-13px] cursor-pointer",
        }}
        onChangeEnd={(event: number | number[]) => {
          onChange?.(event);
        }}
        onChange={(event: number | number[]) => {
          if (Array.isArray(event)) {
            setInputValue([
              formatNumberHandler(event[0]),
              formatNumberHandler(event[1]),
            ]);
          }
        }}
      />
      <div className="input-value-control flex justify-between mt-8">
        <p className="text-dark text-[14px]">
          <span className="text-gray">حداقل</span>{" "}
          {Array.isArray(inputValue) ? inputValue[0] : ""}
        </p>
        <p className="text-dark text-[14px]">
          <span className="text-gray">حداکثر</span>{" "}
          {Array.isArray(inputValue) ? inputValue[1] : ""}
        </p>
      </div>
    </>
  );
};

export default RangeInput;
