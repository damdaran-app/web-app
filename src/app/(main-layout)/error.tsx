"use client";
import Lottie from "lottie-react";
import { FC } from "react";
import NoInternetAnimation from "../../animation/No internet connection.json";
import { samim } from "@/components/fonts";

interface TProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const MainPagesError: FC<TProps> = ({ reset, error }) => {
  return (
    <div className="w-full h-screen bg-transparent flex flex-col items-center">
      <Lottie
        animationData={NoInternetAnimation}
        loop
        className="w-[400px] h-[400px] mt-20 max-sm:w-full"
        color="white"
      />
      <h1 className="text-red-500 text-center text-2xl underline max-sm:text-lg max-sm:-mt-10">
       {`اوه مشکلی پیش اومده، لطفا صفحه رو مجدد لود کنید`}
      </h1>
      <button
        className={`bg-black text-white px-8 py-2.5 text-xl cursor-pointer mt-5
          rounded-2xl transition-all hover:scale-110 ${samim.className}`}
        onClick={() => window.location.reload()}
      >
        صفحه را رفرش کنید...
      </button>
    </div>
  );
};

export default MainPagesError;
