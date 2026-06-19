import { ArticleImageCard } from "@/components";
import AddRateComp from "@/components/AddRateComp";
import { samimBold } from "@/components/fonts";
import { getSingleNews } from "@/utils/services/api/get/newsApi";
import Image from "next/image";
import { FC } from "react";

interface TPeops {
  params: {
    articleId: string;
  };
}

const ArticleDetailPage: FC<TPeops> = async ({ params }) => {
  const { articleId } = await params;
  const response = await getSingleNews(`/getSingleNews/${articleId}`);
  return (
    <div className="w-full">
      {response && (
        <ArticleImageCard
          image={response?.data.image[0].src}
          title={response.data.title}
          date={response.data.createAt}
          time={response.data.studyTime}
        />
      )}
      <div className="desc-section-control mt-8">
        <p className={`${samimBold.className} text-lg`}>معرفی کوتاه</p>
        <p className="leading-8 text-dark mt-3">
          {response?.data.description}
        </p>
      </div>
      {response?.data.image[1] && (
        <div className="secound-image-control w-full h-[400px] max-md:h-[350px] max-sm:h-[300px] mt-8">
          <Image
            src={response?.data.image[1].src}
            width={400}
            height={400}
            alt=""
            className="w-full h-full rounded-3xl"
          />
        </div>
      )}
      <div className="option-item-control mt-7">
        <p className={`${samimBold.className}`}>کاربرد در آشپزی</p>
        <ul className="flex flex-col gap-2 mt-5 list-disc">
          <h1 className="title text-[16px]">
            {response?.data.useInCooking.title}
          </h1>
          {response?.data.useInCooking.tips.map((item, index) => (
            <li key={index} className="text-dark leading-8 text-[15px] mr-6">
              <span>{`${item.title} : `}</span>
              <span>{`${item.description}`}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="key-points-item">
        <p
          className={`${samimBold.className} mt-7`}
        >{`نکات کلیدی برای انتخاب ${response?.data.title}`}</p>
        <ul className="flex flex-col gap-2 mt-3 list-disc">
          {response?.data.keyPoints.map((item, index) => (
            <li key={index} className="text-dark leading-8 text-[15px] mr-6">
              <span>{`${item}`}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rate-item-control mt-12">
        <AddRateComp targetId={articleId} />
      </div>
    </div>
  );
};

export default ArticleDetailPage;
