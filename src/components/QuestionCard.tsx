import { TQuestionsSectionCard } from "@/utils/types";
import Image from "next/image";
import { FC } from "react";
import { samimBold } from "./fonts";

const QuestionCard: FC<TQuestionsSectionCard> = ({
  image,
  title,
  description,
  index,
}) => {
  return (
    <div
      className="w-[290px] flex flex-col items-center bg-white rounded-4xl overflow-hidden p-3 py-8 text-center max-md:grow"
      data-aos="zoom-in"
    >
      <Image
        src={image || ""}
        alt=""
        width={index == 0 ? 150 : 100}
        height={200}
      />
      <h1 className={`text-xl mt-2.5 p-0 ${samimBold.className}`}>{title}</h1>
      <p className="mt-3 line-clamp-2 p-0" title={description}>
        {description}
      </p>
    </div>
  );
};

export default QuestionCard;
