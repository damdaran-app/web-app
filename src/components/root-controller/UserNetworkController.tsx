"use client";
import Lottie from "lottie-react";
import { FC, ReactNode, useEffect, useState } from "react";
import NoInternetAnimation from "../../animation/No internet connection.json";
import { samim } from "../fonts";
import { useRouter } from "next/navigation";

interface TProps {
  children: ReactNode;
}

const UserNetworkController: FC<TProps> = ({ children }) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isOnline] = useState<boolean>(
    typeof window != "undefined" ? window.navigator.onLine : false,
  );
  const router = useRouter()

  const checkUserNetwork = () => {
    if (typeof window != "undefined") {
      if (window.navigator.onLine) {
        setIsError(true);
      } else {
        setIsError(false);
      }
    }
  };

  useEffect(() => {
    checkUserNetwork();
  }, [isOnline]);

  if (!isError) {
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
        <button
          className={`bg-black text-white px-8 py-2.5 text-xs cursor-pointer mt-5
          rounded-2xl transition-all hover:scale-110 ${samim.className}`}
          onClick={() => {window.location.reload()}}
        >
         بعد از وصل شدن اینترنت سیستم، روی این دکمه جهت (رفرش) کلیک کنید
        </button>
      </div>
    );
  } else {
    return <>{children}</>;
  }
};

export default UserNetworkController;
