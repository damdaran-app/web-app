"use client";
import PopularNewsCard from "@/components/article-components/PopularNewsCard";
import { TNews } from "@/utils/types/api-responses-types";
import { FC } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface TProps {
  data: TNews[];
}

const SliderSection: FC<TProps> = ({ data }) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".slider-prev",
          nextEl: ".slider-next",
        }}
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
        className="w-full flex justify-center"
      >
        {data.map((item) => (
          <SwiperSlide key={item._id} className="flex justify-center">
            <PopularNewsCard
              id={item._id}
              image={item.image[0].src}
              title={item.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSection;
