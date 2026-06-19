import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import pic from "../../assets/photos/herou-image2.jpg";

interface TProps {
  id: string;
  image: string;
  title: string;
  parentWidth?: number;
}

const PopularNewsCard: FC<TProps> = ({ id, title, image, parentWidth }) => {
  return (
    <div
      className="popular-card h-[280px] rounded-2xl relative overflow-hidden flex items-center"
      style={{ width: parentWidth ? `${parentWidth}px` : "100%" }}
      data-aos="zoom-in"
    >
      <Image
        src={image ? image : pic.src}
        width={400}
        height={400}
        alt=""
        className="object-cover"
      />
      <div className="items-control w-full h-full flex flex-col justify-end gap-2.5 p-4 absolute top-0 left-0 bg-black/70">
        <p className="title text-white text-[13px] leading-6 line-clamp-2">
          {title}
        </p>
        <Link href={`/articles/${id}`}>
          <button className="text-yellow flex items-center gap-0.5 text-xs mb-2 cursor-pointer">
            <span>خواندن مقاله</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-yellow"
              stroke="#EBE719"
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
        </Link>
      </div>
    </div>
  );
};

export default PopularNewsCard;
