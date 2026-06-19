import { NewsCard } from "@/components";
import { samimBold } from "@/components/fonts";
import { getAllNews } from "@/utils/services/api/get/newsApi";
import Link from "next/link";
import { FC } from "react";
import ChangeLimitComp from "./ChangeLimitComp";

interface TProps {
  searchParams: {
    RowsOfPage: string;
  };
}

const NewArticleSection: FC<TProps> = async ({ searchParams }) => {
  const { RowsOfPage } = await searchParams;
  const response = await getAllNews("/getNewsLists", {
    RowsOfPage: RowsOfPage,
    TypeId: null,
  });
  return (
    <div className="new-article-section-control mt-20">
      <div className="top text-center">
        <h1 className={`${samimBold.className} text-3xl`}>جدید ترین مقالات</h1>
        <p className="text-[14px] tracking-[1px] text-gray mt-2.5">
          مقالات جدید در رابطه با گوشت{" "}
        </p>
      </div>
      <div className="bottom w-full flex justify-center gap-14 flex-wrap mt-7">
        {response?.data.map((item, index) => (
          <Link href={`/articles/${item._id}`} key={index}>
            <NewsCard
              views="1"
              id={item._id}
              contanerWidth={"300px"}
              aosAnimation="flip-left"
              image={item.image[0].src}
              label={item.titleCategories}
              date={item.createAt}
              time={item.studyTime}
              title={item.title}
              description={item.description}
            />
          </Link>
        ))}
      </div>
      <div className="btn-control flex justify-center">
        <ChangeLimitComp limit={8} />
      </div>
    </div>
  );
};

export default NewArticleSection;
