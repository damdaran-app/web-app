import { ArrowIcon } from "@/assets/icons";
import { samimBold } from "@/components/fonts";
import { getNewsByRate } from "@/utils/services/api/get/newsApi";
import SliderSection from "./(components)/SliderSection";

const PoPularArticleComp = async () => {
  const newsResponse = await getNewsByRate("/getNewsByRate");
  return (
    <div className="popular-article-comp-container w-full flex justify-center mt-16">
      <div className="items-control w-full">
        <div className="top w-full flex justify-between items-center">
          <div className="right">
            <p className={`${samimBold.className} text-xl`}>مقالات پر طرفدار</p>
          </div>
          <div className="left flex gap-x-2">
            <ArrowIcon
              size={35}
              className="slider-next rotate-[180deg] cursor-pointer"
            />
            <ArrowIcon size={35} className="slider-prev cursor-pointer" />
          </div>
        </div>
        <div className="bottom w-full flex justify-center mt-3">
          {newsResponse && <SliderSection data={newsResponse?.data} />}
        </div>
      </div>
    </div>
  );
};

export default PoPularArticleComp;
