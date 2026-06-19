import ArticleFilterSectionCompClient from "@/components/article-components/ArticleFilterSectionCompClient";
import { getProductTypeList } from "@/utils/services/api";
import { getAllNews, updateNewsData } from "@/utils/services/api/get/newsApi";
import { ProductTypeResponseType } from "@/utils/types/api-responses-types";
import { FC } from "react";

interface TProps {
  TypeListData: ProductTypeResponseType;
  searchParams: {
    RowsOfPage: string;
    TypeId: string;
  };
}

const ArticleFilterSectionComp: FC<TProps> = async ({ searchParams }) => {
  const newTypeData = await getProductTypeList("/getNewsTypeList");
  const newData = await getAllNews("/getNewsLists", searchParams);

  return (
    <ArticleFilterSectionCompClient
      TypeListData={newTypeData}
      newsInitialData={newData}
      updateNewsHandle={updateNewsData}
    />
  );
};

export default ArticleFilterSectionComp;
