import { StepNavigationComp } from "@/components";
import { FC, ReactNode } from "react";

interface TProps {
  children: ReactNode;
  similarArticles: ReactNode;
  articleCategories: ReactNode;
  comment: ReactNode;
}

export const metadata = {
  title: "صفحه توضیحات مقاله",
  description: "This is the home page of my site",
};

const ArticleDetailLayout: FC<TProps> = ({
  children,
  similarArticles,
  articleCategories,
  comment,
}) => {
  return (
    <>
      <div className="top mt-8">
        <StepNavigationComp
          data={[
            { text: "صفحه اصلی", link: "/" },
            { text: "مقالات", link: "/articles" },
          ]}
        />
      </div>
      <div className="article-detail-layout flex gap-8 items-start mt-8 max-md:justify-center">
        <div className="right w-[70%] max-md:w-[90%]">
          <div className="top w-full p-6 bg-white rounded-2xl">{children}</div>
          <div className="max-md:block hidden w-full mt-4">
            <div className="top w-full p-6 bg-white rounded-2xl">
              {similarArticles}
            </div>
            <div className="bottom w-full p-6 bg-white rounded-2xl mt-4">
              {articleCategories}
            </div>
          </div>
          <div className="bottom w-full p-6 bg-white rounded-2xl mt-4">
            {comment}
          </div>
        </div>
        <div className="left w-[30%] sticky top-4 max-md:hidden block">
          <div className="top w-full p-6 bg-white rounded-2xl">
            {similarArticles}
          </div>
          <div className="bottom w-full p-6 bg-white rounded-2xl mt-4">
            {articleCategories}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleDetailLayout;
