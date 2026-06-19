import { TImageHerouBox } from "@/utils/types";
import { FC } from "react";
import { samim } from "./fonts";

const ImageHerouBox: FC<TImageHerouBox> = ({
  title,
  description,
  image,
  className,
  aosAnimation,
}) => {
  return (
    <div
      className={`relative bg-cover bg-center grow rounded-2xl overflow-hidden ${className}`}
      data-aos={aosAnimation ? aosAnimation : ""}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-10 text-white p-6">
        <h1 className={`text-2xl font-bold ${samim.className}`}>{title}</h1>
        <p className="leading-9 font-normal mt-3">{description}</p>
      </div>
    </div>
  );
};

export default ImageHerouBox;
