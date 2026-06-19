import { THerouSection } from "@/utils/types";
import { FC } from "react";
import { samim } from "./fonts";
import ImageHerouBox from "./ImageHerouBox";

const HerouSection: FC<THerouSection> = ({
  holderWidth,
  title,
  description,
  productData,
}) => {
  return (
    <div
      className="text-center mt-20 flex-col items-center"
      style={holderWidth ? { width: `${holderWidth}%` } : { width: "100%" }}
    >
      <h1 className={`font-bold border-dark text-[22px] ${samim.className}`}>
        {title}
      </h1>
      <p className="text-gray mt-1.5">{description}</p>
      <div className="desc-items-control w-full flex flex-wrap gap-5 mt-7">
        {productData.map((item, index) => (
          <ImageHerouBox
            key={index}
            className={`w-[35%] max-md:w-full max-md:text-center text-start pt-12 pb-5 ${
              index == 0 ? "w-full" : ""
            }`}
            image={item.image}
            title={item.title}
            description={item.description}
            aosAnimation={
              index == 0 ? "fade-down" : index == 1 ? "fade-up" : "fade-up"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default HerouSection;
