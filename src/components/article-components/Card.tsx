import { DateIcon, TimeIcon } from "@/assets/icons";
import { changeMomentHandler } from "@/utils/hook";
import Image from "next/image";
import { FC } from "react";

interface TProps {
  image: string;
  titleCategories: string;
  createAt: string;
  studyTime: string;
  title: string;
  description: string;
}

const Card: FC<TProps> = ({
  image,
  title,
  description,
  titleCategories,
  studyTime,
  createAt,
}) => {
  return (
    <div className="card w-full h-full relative overflow-hidden rounded-3xl max-md:h-[300px]">
      <Image
        src={image && image != "" ? image : "/herou-image1.jpg"}
        width={400}
        height={400}
        alt=""
        className="w-full h-full"
      />
      <div
        className="overlay w-full h-full absolute bg-black/60 top-0 left-0 p-4
        flex flex-col items-start justify-between"
      >
        <span className="categories-text bg-yellow text-dark py-1 px-7 rounded-2xl">
          {titleCategories}
        </span>
        <div className="info-section-control w-full mb-5">
          <div className="top w-full flex justify-between">
            <div className="date-control text-white flex items-center gap-1">
              <DateIcon size={15} color="white" />
              <span className="text-[13px]">{changeMomentHandler(createAt)}</span>
            </div>
            <div className="time-control text-white flex items-center gap-1">
              <TimeIcon size={15} color="white" />
              <span className="text-[13px]">{`${studyTime} دقیقه مطالعه `}</span>
            </div>
          </div>
          <div className="center">
            <h1 className="title line-clamp-2 text-white mt-2">{title}</h1>
          </div>
          {description && (
            <div className="bottom">
              <p className="description"></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
