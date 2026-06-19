import { StepNavigationComp } from "@/components";
import { FC, ReactNode } from "react";

interface TProps {
  children: ReactNode;
  newArticleSection: ReactNode;
  popularArticle: ReactNode;
  articleFilterSection: ReactNode;
}

const layout: FC<TProps> = async ({
  children,
  newArticleSection,
  popularArticle,
  articleFilterSection,
}) => {
  return (
    <>
      <div className="top w-[95%] m-auto mt-6">
        <StepNavigationComp
          data={[
            { text: "صفحه اصلی", link: "/" },
          ]}
        />
      </div>
      <div className="w-full flex justify-center mt-4">
        <div className="holder w-[95%]">
          {children}
          <>
            {newArticleSection}
            {popularArticle}
            {articleFilterSection}
          </>
        </div>
      </div>
    </>
  );
};

export default layout;
