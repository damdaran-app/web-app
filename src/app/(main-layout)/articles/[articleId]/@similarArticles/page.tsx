import { NewsCard } from "@/components";
import { samimBold } from "@/components/fonts";
import { getSimilarNewsList } from "@/utils/services/api/get/newsApi";
import Link from "next/link";
import { FC } from "react";

interface TProps {
  params: {
    articleId: string;
  };
}

const SimilarArticlesPage: FC<TProps> = async ({ params }) => {
  const { articleId } = await params;
  const response = await getSimilarNewsList(
    `/getSimilarNewsByType/${articleId}`,
  );

  return (
    <div className="similar-article-control">
      <h1 className={`${samimBold.className} text-[17px]`}>مقالات مرتبط</h1>
      <div className="card-control flex flex-col gap-5 pl-3 mt-4 max-h-[600px] overflow-y-auto">
        {response?.data && response?.data.length > 0 ? (
          response?.data.map((item, index) => (
            <Link key={index} href={`/articles/${item._id}`}>
              <NewsCard
                id={item._id}
                title={item.title}
                description={item.description}
                date={item.createAt}
                image={item.image[0].src}
                time={item.studyTime}
                views="3"
                contanerWidth="100%"
                containerHeight="100px"
                // aosAnimation=""
                label=""
              />
            </Link>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SimilarArticlesPage;
