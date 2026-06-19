"use client";
import { FC, useState } from "react";
import { samimBold } from "../fonts";

interface TProps {
  videoSrc: string;
  titleText: string;
  descriptionText: string;
  dataAos?: string;
}

const AuthVideoCard: FC<TProps> = ({
  videoSrc,
  titleText,
  descriptionText,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <div className="w-full h-full relative">
      <video
        src={videoSrc}
        preload="auto"
        className="w-full h-full object-cover"
        poster="/card-pic.jpg"
        autoPlay
        muted
        playsInline
        loop
        onLoadedData={() => setLoading(false)}
        onCanPlay={() => setLoading(false)}
        onPlaying={() => setLoading(false)}
        onPlay={() => setLoading(false)}
      ></video>
      <div
        className={`overlay absolute left-0 top-0 w-full h-full p-3
            inset-0 bg-gradient-to-t from-black via-black/60 to-transparent
            flex flex-col justify-end items-center `}
      >
        {titleText && (
          <p
            className={`${samimBold.className} text-yellow text-[22px] text-center mb-3`}
          >
            {titleText}
          </p>
        )}
        {descriptionText && (
          <p className={`text-white text-[13px] text-center mb-5`}>
            {descriptionText}
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthVideoCard;
