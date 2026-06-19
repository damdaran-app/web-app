import { ArticleHerouSection } from "@/components";
import { getTopNews } from "@/utils/services/api/get/newsApi";

const ArticlePage = async () => {
  const topNews = await getTopNews("/getTopNews")

  return (
    <div className="herou-section-control w-full flex justify-center mt-5">
      {topNews && <ArticleHerouSection dataMap={topNews.data} />}
    </div>
  );
};

export default ArticlePage;
