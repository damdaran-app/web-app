import { DateIcon, MobileIcon, TimeIcon } from "@/assets/icons";
import { CustomBtn } from "@/components";
import { FC } from "react";
import userPic from "../../../../../assets/photos/user.png";
import Image from "next/image";

interface TProps {
  image: string;
  title: string;
  desc: string;
  date: string;
  time: string;
  phoneNumber: string;
}

const CallingCard: FC<TProps> = ({
  image,
  title,
  desc,
  date,
  time,
  phoneNumber,
}) => {
  return (
    <div className="calling-card h-full w-full bg-white rounded-2xl p-4">
      <div className="imag-control w-full h-2/4 flex justify-center items-center">
        <Image
          src={image && image != "" ? image : userPic.src}
          width={400}
          height={400}
          alt=""
          className="w-[120px] h-[120px] border rounded-[50%]"
        />
      </div>
      <div className="text-control flex flex-col items-center gap-3.5 mt-3">
        <h1 className="title">{title}</h1>
        <h3 className="desc max-md:text-center">{desc}</h3>
        <CustomBtn
          text=""
          className="flex justify-center items-center gap-2.5 bg-dark py-4 px-2 w-full rounded-2xl cursor-pointer"
        >
          <MobileIcon size={20} color="text-yellow" />
          <span className="text-yellow">{` تماس با ${phoneNumber} `}</span>
        </CustomBtn>
        <div className="date-and-time-control w-full flex justify-between mt-1">
          <div className="date-item-control flex items-center gap-1">
            <DateIcon size={18} />
            <span className="text-[15px] text-gray">{date}</span>
          </div>
          <div className="time-item-control flex items-center gap-1">
            <TimeIcon size={18} />
            <span className="text-[15px] text-gray">{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallingCard;
