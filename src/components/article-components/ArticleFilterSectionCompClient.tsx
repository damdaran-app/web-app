"use client";
import {
  ProductTypeResponseType,
  TNews,
} from "@/utils/types/api-responses-types";
import { TNewsApiParams } from "@/utils/types/news-api-params";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import DeleteIcon from "../../assets/photos/delete.png";
import CustomBtn from "../CustomBtn";
import NewsCard from "../NewsCard";
import NoDataComp from "../NoDataComp";
import SelectOptionComp from "../SelectOptionComp";

interface TProps {
  newsInitialData: {
    data: TNews[];
    totalCount: number;
  };
  TypeListData: ProductTypeResponseType;
  updateNewsHandle: ({
    TypeId,
    RowsOfPage,
  }: {
    TypeId: string;
    RowsOfPage: string;
  }) => Promise<{
    data: TNews[];
    totalCount: number;
  }>;
}

const ArticleFilterSectionCompClient: FC<TProps> = ({
  TypeListData,
  newsInitialData,
  updateNewsHandle,
}) => {
  const [params, setParams] = useState<TNewsApiParams>({
    RowsOfPage: "6",
    TypeId: null,
  });
  const [newsListData, setNewsListtData] = useState<{
    data: TNews[];
    totalCount: number;
  }>(newsInitialData);

  const getUpdateData = async () => {
    const newData = await updateNewsHandle({
      TypeId: params.TypeId ?? "",
      RowsOfPage: params.RowsOfPage ?? "",
    });
    console.log("newData ==>", newData);
    setNewsListtData(newData);
  };

  useEffect(() => {
    getUpdateData();
  }, [params]);

  return (
    <div className="article-filter-section-comp w-full mt-20">
      <div className="top flex justify-between">
        <div className="right flex items-center gap-2 flex-wrap justify-center">
          <span>فیلتر براساس :</span>
          {TypeListData?.data ? (
            <div className="select-option-control bg-white flex items-center pl-2.5 rounded-2xl">
              <SelectOptionComp
                dataMap={TypeListData?.data}
                isSelect={false}
                onClick={async (sort) => {
                  setParams((prev) => ({ ...prev, TypeId: sort._id }));
                }}
                className="bg-white text-black"
                boxClassName="bg-white text-black"
              />
              <Image
                src={DeleteIcon.src}
                width={400}
                height={400}
                alt=""
                className="w-[30px] h-[20px] cursor-pointer"
                onClick={() => setParams({ TypeId: null, RowsOfPage: "6" })}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="bottom flex flex-wrap justify-center gap-5 mt-4">
        {newsListData && newsListData.data.length > 0 ? (
          newsListData.data.map((item, index) => (
            <div key={index} className="card-control max-md:w-full w-[48%]">
              <Link href={`/articles/${item._id}`} key={index}>
                <NewsCard
                  key={index}
                  views="2"
                  id={item._id}
                  image={item.image[0].src}
                  title={item.title}
                  date={item.createAt}
                  label={item.titleCategories}
                  description={item.description}
                  time={item.studyTime}
                  contanerWidth={"100%"}
                  containerHeight="150px"
                  aosAnimation="fade-down"
                />
              </Link>
            </div>
          ))
        ) : (
          <NoDataComp />
        )}
      </div>
      {/* <div className="btn-control w-full flex justify-center">
        <CustomBtn
          text="نمایش بیشتر"
          className="border border-border mt-8 rounded-3xl cursor-pointer"
          onClick={async () => {
            setParams((prev) => ({
              ...prev,
              RowsOfPage: (Number(params.RowsOfPage) + 6).toString(),
            }));
          }}
        />
      </div> */}
    </div>
  );
};

export default ArticleFilterSectionCompClient;
