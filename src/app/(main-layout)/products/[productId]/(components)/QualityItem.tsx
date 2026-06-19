import { samimBold } from "@/components/fonts";
import { FC } from "react";

interface IProps {
  quality: string;
}

const QualityItem: FC<IProps> = ({ quality }) => {
  return (
    <div className="quality-item-control flex flex-col gap-y-1.5">
      <p className={`${samimBold.className} max-md:text-center`}>کیفیت :</p>
      <div className="items-control flex gap-x-4 text-[13px]">
        <p
          className={`w-[30px] h-[30px] text-center border flex justify-center items-center border-border rounded-[30%] ${
            quality > "3" ? "bg-yellow" : "bg-transparent"
          }`}
        >
          <span>+A</span>
        </p>
        <p
          className={`w-[30px] h-[30px] text-center border flex justify-center items-center border-border rounded-[30%] ${
            quality >= "2" && quality == "3" ? "bg-yellow" : "bg-transparent"
          }`}
        >
          <span>A</span>
        </p>
        <p
          className={`w-[30px] h-[30px] text-center border flex justify-center items-center border-border rounded-[30%] ${
            quality == "1" ? "bg-yellow" : "bg-transparent"
          }`}
        >
          <span>C</span>
        </p>
      </div>
    </div>
  );
};

export default QualityItem;
