"use client"
import { DateIcon, TimeIcon } from "@/assets/icons";
import { changeMomentHandler } from "@/utils/hook";
import { TNewsCard } from "@/utils/types/news-card-types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Pic from "../../public/photos/news.jpg";
import CustomBtn from "./CustomBtn";
import { samimBold } from "./fonts";
import { useRouter } from "next/navigation";

const NewsCard: FC<TNewsCard> = ({
  id,
  image,
  title,
  description,
  aosAnimation,
  time,
  date,
  label,
  views,
  contanerWidth,
  containerHeight,
}) => {
  const router = useRouter()
  return (
    <div
      className={`news-card rounded-2xl shadow ${
        views == "1"
          ? "h-[320px]"
          : "flex gap-3 bg-white border border-border p-2"
      }`}
      data-aos={aosAnimation}
      style={{
        width: contanerWidth ? contanerWidth : "300px",
        height: containerHeight ? containerHeight : "320px",
      }}
    >
      <div
        className={`image-control ${
          views == "1" ? "w-full h-[55%]" : "w-[40%] h-full"
        } relative`}
      >
        <Image
          src={image ? image : Pic.src}
          width={400}
          height={400}
          alt=""
          className="w-full h-full rounded-2xl"
        />
        {label != "" && (
          <CustomBtn
            text={label}
            className="bg-[#EBE719] text-dark absolute top-0 right-0 rounded-full text-[13px] mt-2 mr-2"
          />
        )}
      </div>
      <div
        className={`info-control px-2 pb-3 ${
          views == "1"
            ? "w-full h-[45%] flex flex-col justify-between"
            : views == "2"
              ? "w-[60%] h-full flex flex-col justify-between"
              : views == "3"
                ? "w-[60%] h-full flex flex-col-reverse justify-between"
                : ""
        }`}
      >
        <div className="top-item-control">
          <div
            className={`date-and-time-control flex items-center justify-between ${
              views == "1" ? "mt-3" : "mt-1"
            }`}
          >
            <div className="date-control flex items-center gap-x-1">
              <DateIcon size={13} />
              <p className="text-gray text-xs">{changeMomentHandler(date)}</p>
            </div>
            <div className="time-control flex items-center gap-x-1">
              <TimeIcon size={13} />
              <p className="text-gray text-xs">{`${time}دقیقه مطالعه `}</p>
            </div>
          </div>
          <div className="title-and-describ-control">
            {views != "3" && (
              <p
                className={`title ${samimBold.className} ${
                  views == "1" ? "mt-2.5" : "mb-3"
                } line-clamp-2 text-ellipsis`}
              >
                {title}
              </p>
            )}
            <p
              className={`title text-xs text-gray ${views != "3" ? "mt-1.5" : ""} line-clamp-3 text-ellipsis`}
            >
              {description}
            </p>
          </div>
        </div>
        {/* <Link href={`/articles/${id}`}> */}
          <button
            className="text-primary flex items-center gap-0.5 text-xs cursor-pointer"
            onClick={() => router.push(`/articles/${id}`)}
          >
            <span>خواندن مقاله</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
              stroke="#395e80"
            >
              <path
                d="M4.58301 10.0015H15.833"
                //   stroke="#EBE719"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.16693 15.0015C9.16693 15.0015 4.167 11.319 4.16699 10.0014C4.16698 8.68384 9.16702 5.00146 9.16702 5.00146"
                //   stroke="#EBE719"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default NewsCard;
