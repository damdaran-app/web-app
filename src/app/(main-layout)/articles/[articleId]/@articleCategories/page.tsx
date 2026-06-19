import { CustomBtn } from "@/components";
import { samimBold } from "@/components/fonts";
import { getSingleNews } from "@/utils/services/api/get/newsApi";
import { FC } from "react";

interface TProps {
  params: {
    articleId: string;
  };
}

const ArticleCategoriesPage: FC<TProps> = async ({ params }) => {
  const { articleId } = await params;
  const response = await getSingleNews(`/getSingleNews/${articleId}`);
  return (
    <div className="article-categories-list-control">
      <h1 className={`${samimBold.className} text-[17px]`}>دسته بندی ها</h1>
      <div className="card-control w-full flex gap-4 flex-wrap mt-3">
        {response?.data.categoriesList.map((item, index) => (
          <CustomBtn
            key={index}
            text={item}
            className="bg-yellow rounded-full text-[15px] px-5"
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleCategoriesPage;
