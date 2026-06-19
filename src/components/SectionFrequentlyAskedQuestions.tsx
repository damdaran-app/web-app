import { TSectionFrequentlyAskedQuestions } from "@/utils/types";
import Image from "next/image";
import { FC } from "react";
import pic from "../assets/photos/Frame 699.png";
import CustomAccordion from "./CustomAccordion";
import { samimBold } from "./fonts";

const SectionFrequentlyAskedQuestions: FC<TSectionFrequentlyAskedQuestions> = ({
  title,
  description,
  brand,
  organicMeat,
  yearsOfActivity,
  questionsData,
}) => {
  return (
    <div
      className="section-container w-full flex justify-center mt-8"
      id="landingAboutMeSection"
    >
      <div className="section-control w-[95%] flex justify-between gap-6 flex-wrap max-[1037px]:justify-center max-[1037px]:text-center">
        <div className="right">
          <div className="top">
            <Image src={pic.src} alt="" width={340} height={340} className="" />
          </div>
          <div className="bottom flex items-center justify-between mt-8">
            <div className="right text-center">
              <p className="text-4xl font-bold">{`${brand}+`}</p>
              <p className="text-[14px] text-gray mt-1">برند معتبر</p>
            </div>
            <div className="center text-center">
              <p className="text-4xl font-bold">{`%${organicMeat}`}</p>
              <p className="text-[14px] text-gray mt-1">گوشت اورگانیک</p>
            </div>
            <div className="left text-center">
              <p className="text-4xl font-bold">{`${yearsOfActivity}+`}</p>
              <p className="text-[14px] text-gray mt-1">سال های فعالیت</p>
            </div>
          </div>
        </div>
        <div className="left w-[60%] max-xl:mt-8 max-[1037px]:w-full">
          <div className="title-and-description-control">
            <h1
              className={`${samimBold.className} text-3xl max-xl:text-2xl max-md:text-xl`}
            >
              {title}
            </h1>
            <p
              className="text-gray mt-4 line-clamp-2 max-md:text-[15px]"
              title={description}
            >
              {description}
            </p>
          </div>
          <div className="questions-section flex flex-col gap-y-5 mt-6">
            {questionsData.map((item, index) => (
              <CustomAccordion
                key={index}
                title={item.question}
                description={item.answerToTheQuestion}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFrequentlyAskedQuestions;
