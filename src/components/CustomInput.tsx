"use client";
import { ICustomInput } from "@/utils/types";
import { Select, SelectItem } from "@heroui/react";
import { FC, useState } from "react";
import gregorian from "react-date-object/calendars/gregorian";
import persian from "react-date-object/calendars/persian";
import english from "react-date-object/locales/gregorian_en";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import RangeInput from "./RangeInput";

const CustomInput: FC<ICustomInput> = ({
  type,
  labelText,
  placeholder,
  name,
  itemData,
  rangeMinValue,
  rangeMaxValue,
  rangeSteper,
  rangeDefaultValue,
  onChange,
  dataAos,
  className,
  bgColor,
}) => {
  const [selectState, setSelectState] = useState<string>("");
  const [dateState, setDateState] = useState<string>("");
  const [rangeState, setRangeState] = useState<number[] | number>([]);
  const [selectItemId] = useState<string>("");
  return (
    <div data-aos={dataAos} className={className}>
      <span className={`text-dark font-bold text-[16px] "mr-1`}>
        {labelText}
      </span>
      {type === "select" ? (
        <>
          <Select
            isRequired
            placeholder={placeholder}
            selectionMode="single"
            label="دسته‌بندی"
            aria-label="انتخاب دسته‌بندی"
            name={name}
            classNames={{
              base: `${bgColor} rounded-3xl mt-3 overflow-hidden`,
              trigger: `bg-lightGray outline-0 border-0 w-full bg-lightGray rounded-3xl flex justify-start
              flex items-center justify-center py-0 h-[38px] group`,
              innerWrapper: "w-full text-right p-0",
              value: "text-gray text-[16px] p-0 mr-3",
              errorMessage: "hidden",
              label: "hidden",
              listbox:
                "flex flex-col bg-lightGray text-dark rounded-3xl overflow-hidden",
              popoverContent:
                "border-1 border-border rounded-3xl p-0 shadow-xl",
              selectorIcon:
                "absolute left-4 text-dark text-xl rotate-[180deg] group-focus:rotate-[0deg] transition-all",
            }}
            onChange={(event) => {
              setSelectState(event.target.value);
              onChange?.({
                target: event.target,
                name: "select",
                rangeNum: [],
                search: "",
                selectOption: {
                  name: event.target.name,
                  value: selectItemId,
                },
                date: "",
              });
            }}
            selectorIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            }
          >
            {itemData.map((item, index) => (
              <SelectItem
                typeof="submit"
                key={index}
                className="p-1.5 rounded-xl hover:bg-dark hover:text-white"
                onClick={(event) => {
                  onChange?.({
                    target: event.target,
                    name: "select",
                    rangeNum: [],
                    search: "",
                    selectOption: {
                      name: "select",
                      value: item._id,
                    },
                    date: "",
                  });
                }}
              >
                {item ? item.name : ""}
              </SelectItem>
            ))}
          </Select>
          <input type="hidden" name={name} value={selectState} />
        </>
      ) : type === "date" ? (
        <>
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            format="YYYY/MM/DD"
            onChange={(value) => {
              if (value) {
                const gregorianDate = value.convert(gregorian, english);
                onChange?.({
                  name: "date",
                  rangeNum: [],
                  search: "",
                  selectOption: { name: "", value: "" },
                  date: gregorianDate.format("YYYY-MM-DD"),
                });
                setDateState(gregorianDate.format("YYYY-MM-DD"));
              }
            }}
            containerClassName="w-full"
            inputClass={`${bgColor} outline-0 z-50 text-right border-0 w-full text-gray text-[16px] py-4 px-5  rounded-3xl mt-3`}
            placeholder={placeholder}
          />
          <input type="hidden" name={name} value={dateState} />
        </>
      ) : type === "range" ? (
        <>
          <RangeInput
            rangeMinValue={rangeMinValue}
            rangeMaxValue={rangeMaxValue}
            rangeSteper={rangeSteper}
            rangeDefaultValue={rangeDefaultValue}
            onChange={(value) => {
              onChange?.({
                name: "range",
                rangeNum: Array.isArray(value) ? value : [],
                search: "",
                selectOption: { name: "", value: "" },
                date: "",
              });
              setRangeState(value);
            }}
          />
          <input type="hidden" name={name} value={rangeState.toString()} />
        </>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className={`${bgColor} bg-lightGray outline-0 border-0 w-full text-dark py-2.5 px-5 text-right text-[14px] rounded-3xl mt-3`}
          onChange={(event) =>
            onChange?.({
              name: event.target.name,
              target: event.target,
              rangeNum: [],
              search: event.target.value,
              selectOption: { name: "", value: "" },
              date: "",
            })
          }
        />
      )}
    </div>
  );
};

export default CustomInput;
