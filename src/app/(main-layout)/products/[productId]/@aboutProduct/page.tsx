import { samimBold } from "@/components/fonts";
import { getSingleProduct } from "@/utils/services/api";
import { FC } from "react";

interface IProps {
  params: {
    productId: string;
  };
}

const AboutProductPage: FC<IProps> = async ({ params }) => {
  const { productId } = await params;
  const response = await getSingleProduct(`/getSingleProduct/${productId}`);
  return (
    <div>
      <div className="short-introduction-item">
        <h2 className={`${samimBold.className}`}>معرفی کوتاه</h2>
        <p className="text-[14px] text-gray leading-8 mt-2.5">
          {response?.data.miniDescription}
        </p>
      </div>
      <div className="use-in-cooking-item mt-8">
        <h2 className={`${samimBold.className}`}>کاربرد در آشپزی</h2>
        <p className="text-[14px] text-gray leading-8 mt-2.5">
          {response?.data.useInCooking.title}
        </p>
        <ul className="list">
          {response?.data.useInCooking.tips.map((item, index) => (
            <li
              className="text-[14px] text-gray leading-8 list-disc mr-7"
              key={index}
            >
              <span>{`${item.title} : `}</span>
              <span>{item.description}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="key-points-item mt-8">
        <h2 className={`${samimBold.className}`}>
          {`نکات کلیدی برای انتخاب ${response?.data.title}`}
        </h2>
        <ul className="list mt-1.5">
          {response?.data.keyPoints.map((item, index) => (
            <li
              className="text-[14px] text-gray leading-8 list-disc mr-7"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutProductPage;
