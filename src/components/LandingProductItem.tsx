"use client";
import {
  ProductTypeResponseType,
  TFilteringSort,
} from "@/utils/types/api-responses-types";
import { TProductsApiParams } from "@/utils/types/products-api-params";
import { GetProductRsponseType } from "@/utils/types/products-type";
import { FC, useEffect, useState } from "react";
import CustomCard from "./CustomCard";
import LandingSortItem from "./LandingSortItem";
import NoDataComp from "./NoDataComp";

interface TProps {
  productTypeData: ProductTypeResponseType;
  productDataList: GetProductRsponseType;
  updateProductList: (
    params: TProductsApiParams,
  ) => Promise<GetProductRsponseType>;
}

const LandingProductItem: FC<TProps> = ({
  productTypeData,
  productDataList,
  updateProductList,
}) => {
  const [paramsState, setParamsState] = useState<TProductsApiParams>({
    PageNumber: "1",
    RowsOfPage: "8",
    ProductTypeId: null,
  });
  const [productData, setProductData] =
    useState<GetProductRsponseType>(productDataList);

  const resetParamsState = () => {
    setParamsState({
      PageNumber: "1",
      RowsOfPage: "8",
      ProductTypeId: null,
    });
  };

  const sortCluckHandelr = (item: TFilteringSort) => {
    setParamsState((prev) => ({ ...prev, ProductTypeId: item._id }));
  };

  useEffect(() => {
    const getProductData = async () => {
      const newData = await updateProductList(paramsState);
      setProductData(newData);
    };
    getProductData();
  }, [paramsState, updateProductList]);

  return (
    <>
      <div className="item-contaienr list-control w-[93%] max-881px:w-full flex flex-col items-center my-10 mt-14">
        <div className="top-items-control w-full flex">
          {productTypeData?.data && (
            <LandingSortItem
              sortData={productTypeData?.data}
              sortClickHandle={(item) => sortCluckHandelr(item)}
              deleteFilterClick={resetParamsState}
            />
          )}
        </div>
        <div className="card-control w-full flex flex-wrap justify-center gap-8 max-881px:gap-6 mt-12">
          {productData?.data && productData?.data.length != 0 ? (
            productData?.data?.map((item, index) => {
              return (
                <CustomCard
                  key={index}
                  className="w-[310px] max-md:w-[280px]"
                  image={item.imageAddress}
                  title={item.title}
                  countryName={item.xportingCountry}
                  description={item.description}
                  rating={Number(item.quality)}
                  view={1}
                  productId={item._id}
                  dataAos="flip-left"
                  link="/products"
                />
              );
            })
          ) : (
            <NoDataComp />
          )}
        </div>
      </div>
    </>
  );
};

export default LandingProductItem;
