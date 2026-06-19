"use client";

import Lottie from "lottie-react";
import { FC } from "react";
import NoInternetAnimation from "../../animation/No internet connection.json";

interface TProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const MainPagesError: FC<TProps> = () => {
  return (
    <div className="w-full h-screen bg-transparent flex flex-col items-center">
      <Lottie
        animationData={NoInternetAnimation}
        loop
        className="w-[400px] h-[400px] mt-20 max-sm:w-full"
        color="white"
      />
      <h1 className="text-red-500 text-center text-2xl underline max-sm:text-lg max-sm:-mt-10">
        لطفا اینترنت سیستم خود را چک کنید
      </h1>
      {/* <button className="border-orange-500 text-white px-6 p-4" onClick={reset}>Reload...</button> */}
    </div>
  );
};

export default MainPagesError;
