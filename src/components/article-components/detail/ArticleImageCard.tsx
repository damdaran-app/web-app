import { DateIcon, TimeIcon } from "@/assets/icons";
import { samimBold } from "@/components/fonts";
import { changeMomentHandler } from "@/utils/hook";
import Image from "next/image";
import { FC } from "react";
import pic from "../../../assets/photos/article-detail.png";

interface TProps {
  image: string;
  date: string;
  time: string;
  title: string;
}

const ArticleImageCard: FC<TProps> = ({ image, date, time, title }) => {
  return (
    <div className="w-full h-[480px] relative rounded-2xl overflow-hidden max-md:h-[300px]">
      <Image
        src={image ? image : pic.src}
        width={400}
        height={400}
        alt=""
        className="w-full h-full"
      />
      <div className="items-control w-full h-full absolute top-0 left-0 bg-black/30 text-white flex flex-col justify-end p-9">
        <div className="top w-full flex items-center justify-between text-xs mb-3">
          <div className="date-control flex items-center gap-1.5">
            <DateIcon size={17} color="white" />
            <span>{changeMomentHandler(date)}</span>
          </div>
          <div className="time-control flex items-center gap-1.5">
            <TimeIcon size={17} color="white" />
            <span>{`${time} دقیقه مطالعه `}</span>
          </div>
        </div>
        <div className="bottom">
          <h1 className={`${samimBold.className} text-3xl`}>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default ArticleImageCard;
