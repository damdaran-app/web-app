import { TCustomCard } from "@/utils/types";
import Link from "next/link";
import { FC } from "react";
import StarNoFillPhoto from "../assets/photos/Frame.png";
import StarPhoto from "../assets/photos/star.png";
import CustomBtn from "./CustomBtn";
import Image from "next/image";

const CustomCard: FC<TCustomCard> = ({
  view,
  image,
  title,
  countryName,
  rating,
  description,
  className,
  dataAos,
  link,
}) => {
  const widthNum = rating * 10;
  return (
    <div
      className={`card bg-white rounded-2xl shadow-md p-3 ${
        view == 1 ? "w-[280px]" : "w-full flex gap-x-3.5"
      } ${className}`}
      data-aos={dataAos}
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div className={`image-control ${view == 1 ? "" : "w-[45%]"}`}>
        <Image
          src={image != "null" ? image : "/photos/card-pic.jpg"}
          width={400}
          height={400}
          alt=""
          className="w-full h-[250px] rounded-2xl"
        />
      </div>
      <div
        className={`items-control mt-3 w-full ${
          view == 1 ? "" : "w-[55%] flex flex-col"
        }`}
      >
        <div
          className={`top flex ${
            view == 1 ? "items-center" : "flex-col gap-y-3.5"
          } justify-between`}
        >
          <div className="right">
            <button className="bg-dark/10 text-[13px] text-dark py-1.5 px-4 rounded-2xl">
              {countryName}
            </button>
          </div>
          <div className="left">
            <div
              className="fill-no-star relative w-[80px] h-5 bg-repeat-x bg-contain"
              style={{ backgroundImage: `url(${StarNoFillPhoto.src})` }}
            >
              <div
                className="h-5 absolute top-0 left-0 star bg-repeat-x bg-contain"
                style={{
                  width: `${widthNum}px`,
                  backgroundImage: `url(${StarPhoto.src})`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div
          className={`center text-start mt-5 ${
            view == 1 ? "" : "flex flex-col gap-y-3"
          }`}
        >
          <h1 className={`${view == 1 ? "text-[14px]" : "text-2xl"}`}>
            {title}
          </h1>
          <p className="text-gray line-clamp-2 text-[12px] mt-1.5 leading-5">
            {description}
          </p>
        </div>
        <Link href={link}>
          <CustomBtn
            text="مشاهده جزئیات بیشتر"
            className={`bg-dark text-yellow w-full mt-5 cursor-pointer ${
              view == 1 ? "" : "py-5"
            }`}
          />
        </Link>
      </div>
    </div>
  );
};

export default CustomCard;
