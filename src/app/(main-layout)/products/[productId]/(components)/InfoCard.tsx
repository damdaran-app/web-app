import { samimBold } from "@/components/fonts";
import { FC } from "react";
import pic from "../../../../../assets/photos/herou-image1.jpg";
import QualityItem from "./QualityItem";
import Image from "next/image";

interface IProps {
  imageAddress: string;
  title: string;
  quality: string;
  qountry: string;
  productType: string;
  brands: string[];
  isBones: string;
}

const InfoCard: FC<IProps> = ({
  imageAddress,
  title,
  quality,
  qountry,
  productType,
  brands,
  isBones,
}) => {
  return (
    <div className="info-card w-full h-full flex items-center justify-center gap-x-8 max-md:flex-col max-md:gap-y-4">
      <div className="image-control w-2/4 h-[300px] p-3.5 border border-border rounded-2xl max-md:w-[80%] max-sm:w-full max-md:h-[350px] max-sm:h-[300px]">
        <Image
          src={imageAddress ? imageAddress : pic.src}
          width={400}
          height={400}
          alt=""
          className="w-full h-full rounded-2xl object-cover"
          data-aos="zoom-in"
        />
      </div>
      <div className="info-control w-2/4 h-full flex flex-col items-start justify-between max-lg:gap-6 text-[14px] max-md:w-full max-md:items-center">
        <p
          className={`title ${samimBold.className} text-dark text-xl max-md:text-[26px]`}
        >
          {title}
        </p>
        <QualityItem quality={quality} />
        <p className="qountry-text text-lg">
          <span className={`${samimBold.className}`}>کشور مبدا :</span>
          <span className="text-gray mr-1.5">{qountry}</span>
        </p>
        <p className="type-text text-lg">
          <span className={`${samimBold.className}`}>نوع گوشت :</span>
          <span className="text-gray mr-1.5">{productType}</span>
        </p>
        <p className="brnd-text text-lg">
          <span className={`${samimBold.className}`}>برند ها :</span>
          {brands?.map((item, index) => (
            <span key={index} className="text-gray mr-1.5">
              {`${item},`}
            </span>
          ))}
        </p>
        <p className="text-lg">
          <span className={`${samimBold.className}`}>استخوان :</span>
          <span className="text-gray mr-1.5">
            {isBones == "false" ? "استخوان ندارد" : "استخوان دارد"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
