"use client";
import { CustomBtn } from "@/components";
import CustomInput from "@/components/CustomInput";
import { setUrl } from "@/utils/hook/useSetUrl";
import { ICustomInputEvent } from "@/utils/types";
import { TFilteringSort } from "@/utils/types/api-responses-types";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import DeleteFiltersComp from "./DeleteFiltersComp";

export type filterDataType = {
  message: string;
  data: TFilteringSort[];
};

interface TProps {
  statusFlag: boolean;
  acceptFilter?: () => void;
  deleteFilter?: () => void;

  filterData: {
    productPieceData: filterDataType;
    producteEportingCountryData: filterDataType;
    productTypesData: filterDataType;
  };
}

const FilterBox: FC<TProps> = ({
  filterData,
  statusFlag,
  acceptFilter,
  deleteFilter,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showFlag, setShowFlag] = useState<boolean>(statusFlag);
  const [innerWidth, setInnerWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window != "undefined") {
      setInnerWidth(window.innerWidth);
      window.addEventListener("resize", () => {
        setInnerWidth(window.innerWidth);
        if (window.innerWidth > 1024) {
          setShowFlag(false);
        } else {
          setShowFlag(true);
        }
      });
    }
  }, []);

  const searchChangeHandler = (values: ICustomInputEvent) => {
    setUrl({
      useSearchParams: searchParams,
      useRouter: router,
      data: [{ name: "Query", value: values.search }],
    });
  };

  const pieceChangeHandler = (values: ICustomInputEvent) => {
    setUrl({
      useSearchParams: searchParams,
      useRouter: router,
      data: [{ name: "Query", value: values.search }],
    });
  };

  const exportingCountryChangeHandler = (values: ICustomInputEvent) => {
    setUrl({
      useSearchParams: searchParams,
      useRouter: router,
      data: [{ name: "LssuingCountryId", value: values.selectOption.value }],
    });
  };

  const typeChangeHandler = (values: ICustomInputEvent) => {
    setUrl({
      useSearchParams: searchParams,
      useRouter: router,
      data: [{ name: "ProductTypeId", value: values.selectOption.value }],
    });
  };

  const priceChangeHandler = (values: ICustomInputEvent) => {
    setUrl({
      useSearchParams: searchParams,
      useRouter: router,
      data: [
        { name: "minPrice", value: values.rangeNum[0].toString() },
        { name: "maxPrice", value: values.rangeNum[1].toString() },
      ],
    });
  };

  return (
    <div
      className={`filter-box-container bg-white ${!showFlag ? "w-full h-full" : "min-md:w-[400px] w-[80%]"}
      shadow-md inset-shadow-xs rounded-2xl p-5 flex flex-col gap-y-6`}
    >
      <CustomInput
        type={"text"}
        labelText={"جستجو"}
        placeholder={"جست و جو کنید..."}
        name={"search"}
        itemData={[]}
        className="w-full"
        onChange={searchChangeHandler}
      />
      {filterData?.productPieceData && (
        <CustomInput
          type={"select"}
          labelText={"قطعه یا بخش گوشت"}
          placeholder=""
          name={"sort1"}
          itemData={filterData?.productPieceData?.data ?? []}
          className="w-full"
          onChange={pieceChangeHandler}
          bgColor="bg-white"
        />
      )}
      {filterData?.producteEportingCountryData && (
        <CustomInput
          type={"select"}
          labelText={"کشور صادر کننده"}
          placeholder=""
          name={"sort1"}
          itemData={filterData?.producteEportingCountryData?.data ?? []}
          className="w-full"
          onChange={exportingCountryChangeHandler}
        />
      )}
      {filterData?.productTypesData && (
        <CustomInput
          type={"select"}
          labelText={"نوع محصول"}
          placeholder=""
          name={"sort2"}
          itemData={filterData?.productTypesData?.data ?? []}
          className="w-full"
          onChange={typeChangeHandler}
        />
      )}

      <CustomInput
        type={"range"}
        labelText={"گرید کیفیتی"}
        placeholder=""
        name={"range"}
        itemData={[]}
        className="w-full"
        rangeMinValue={10000}
        rangeMaxValue={1000000}
        rangeDefaultValue={[10000, 1000000]}
        onChange={priceChangeHandler}
      />
      {statusFlag && innerWidth < 1024 ? (
        <div className="btn-control w-full flex gap-x-3">
          <CustomBtn
            text="اعمال فیلتر"
            className="w-2/4 bg-black text-yellow cursor-pointer"
            onClick={() => acceptFilter?.()}
          />
          <DeleteFiltersComp
            dataMap={[
              "PageNumber",
              "RowsOfPage",
              "Query",
              "LssuingCountryId",
              "ProductQuality",
              "ProductTypeId",
              "minPrice",
              "maxPrice",
            ]}
            pathName="products"
            className="w-2/4 bg-yellow text-black"
            click={() => deleteFilter?.()}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FilterBox;
