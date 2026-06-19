import { TQuestionsSection } from "@/utils/types";
import { FC } from "react";
import pic1 from "../assets/photos/question1.png";
import pic2 from "../assets/photos/question2.png";
import pic3 from "../assets/photos/question3.png";
import pic4 from "../assets/photos/question4.png";
import { samimBold } from "./fonts";
import QuestionCard from "./QuestionCard";

const QuestionsSection: FC<TQuestionsSection> = ({ title, questionData }) => {
  return (
    <div className="w-full p-6 py-7 max-md:p-0 rounded-4xl bg-lightGray">
      <h1
        className={`text-center text-3xl max-md:text-2xl ${samimBold.className}`}
      >
        چرا انتخاب ما تصمیم هوشمندانه ای است ؟
      </h1>
      <h3 className="text-gray text-center text-[15px] mt-3.5">{title}</h3>
      <div className="card-control flex flex-wrap justify-center items-center gap-5 mt-10">
        {questionData?.map((item, index) => (
          <QuestionCard
            key={index}
            title={item.tipsTitle}
            description={item.tipsDescription}
            image={
              index == 0
                ? pic1.src
                : index == 1
                  ? pic2.src
                  : index == 2
                    ? pic3.src
                    : pic4.src
            }
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionsSection;
