import { TNews } from "@/utils/types/api-responses-types";
import { FC } from "react";
import Card from "../Card";

interface TProps {
  dataMap: TNews[];
}

const ArticleHerouSection: FC<TProps> = ({ dataMap }) => {
  console.log("dataMap ==>", dataMap)
  return (
    <div className="article-herou-section flex gap-4 w-full h-[450px] max-md:flex-col max-md:h-auto">
      <div
        className="right w-2/4 h-full relative overflow-hidden rounded-3xl max-md:w-full max-md:h-auto"
        data-aos="fade-left"
      >
        <Card
          image={dataMap[0].image[0].src ?? ""}
          createAt={dataMap[0].createAt}
          studyTime={dataMap[0].studyTime}
          titleCategories={dataMap[0].titleCategories}
          title={dataMap[0].title}
          description={dataMap[0].description}
        />
      </div>
      <div
        className="left w-2/4 h-full relative overflow-hidden rounded-3xl flex flex-col
        justify-between max-md:w-full max-md:h-auto max-md:gap-4 max-md:hidden"
        data-aos="fade-right"
      >
        {dataMap?.map((item, index) => {
          console.log("item ==>", item)
          if (index >= 1) {
            return (
              <div
                className="card-control w-full h-[48%] max-md:h-auto"
                key={index}
              >
                <Card
                  image={item.image[0].src ?? ""}
                  createAt={item.createAt}
                  studyTime={item.studyTime}
                  titleCategories={item.titleCategories}
                  title={item.title}
                  description={item.description}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ArticleHerouSection;
