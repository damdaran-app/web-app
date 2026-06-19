"use client";
import DeleteFiltersComp from "@/app/(main-layout)/products/(components)/DeleteFiltersComp";
import FilterBox, {
  filterDataType,
} from "@/app/(main-layout)/products/(components)/FilterBox";
import { GetProductRsponseType } from "@/utils/types/products-type";
import { FC, useEffect, useState } from "react";
import CustomBtn from "../CustomBtn";
import CustomCard from "../CustomCard";
import { samimBold } from "../fonts";
import NoDataComp from "../NoDataComp";

interface TProps {
  data: GetProductRsponseType;
  RowsOfPage: number;

  filterData: {
    productPieceData: filterDataType;
    producteEportingCountryData: filterDataType;
    productTypesData: filterDataType;
  };
}

const ProductListSectionComp: FC<TProps> = ({ data, filterData }) => {
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const [filterBoxStatusFlag, setFilterBoxStatusFlag] =
    useState<boolean>(false);

  useEffect(() => {
    if (typeof window != "undefined") {
      setInnerWidth(window.innerWidth);
      window.addEventListener("resize", () => {
        setInnerWidth(window.innerWidth);
      });
    }
  }, []);

  return (
    <div className="list-section">
      {filterBoxStatusFlag && (
        <div className="filterbox-control w-full h-full max-lg:flex hidden fixed top-0 left-0 z-[1000] justify-center items-center">
          <div className="overlay w-full h-full absolute top-0 left-0 bg-black/35"></div>
          <div className="box-control w-full h-full relative flex justify-center items-center">
            <FilterBox
              statusFlag={filterBoxStatusFlag}
              acceptFilter={() => setFilterBoxStatusFlag(false)}
              deleteFilter={() => setFilterBoxStatusFlag(false)}
              filterData={filterData}
            />
          </div>
        </div>
      )}
      <div className="bottom relative w-full flex items-start justify-end gap-x-10">
        <div className="right w-[25%] right-14 sticky top-6 max-lg:hidden">
          <div className="text-control w-full flex items-center justify-between">
            <div className="right w-2/4 flex items-center gap-x-3">
              <p className={`${samimBold.className} text-xl`}>فیلترها</p>
              <p
                className={`text-xl text-yellow stroke-2 stroke-black`}
              >{`${data.totalCount} نتیجه`}</p>
            </div>
            <div className="left w-2/4 flex justify-end">
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
                className="w-[103px] bg-black text-yellow p-0 text-xs"
              />
            </div>
          </div>
          <div className="filter-item-control mt-3">
            <FilterBox
              statusFlag={filterBoxStatusFlag}
              filterData={filterData}
            />
          </div>
        </div>
        <div className="left w-[70%] mb-12 max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center">
          <CustomBtn
            text="اعمال فیلتر"
            className="max-lg:block hidden bg-black text-yellow text-[14px] cursor-pointer w-[200px] max-sm:w-full"
            onClick={() => setFilterBoxStatusFlag(true)}
          />
          <div className="list-control flex flex-col gap-6 max-lg:flex-row max-lg:flex-wrap max-lg:justify-center max-lg:mt-4">
            {data && data.data.length != 0 ? (
              data.data.map((item, index) => {
                return (
                  <CustomCard
                    key={index}
                    className="w-full max-lg:w-[250px] max-sm:w-full"
                    image={item.imageAddress}
                    title={item.title}
                    countryName={item.xportingCountry}
                    description={item.miniDescription}
                    rating={Number(item.quality)}
                    view={innerWidth > 1024 ? 2 : 1}
                    productId={item._id}
                    dataAos=""
                    link={`products/${item._id}`}
                  />
                );
              })
            ) : (
              <NoDataComp />
            )}
          </div>
          {/* <PaginationComp total={data.totalCount} limit={RowsOfPage} /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductListSectionComp;
