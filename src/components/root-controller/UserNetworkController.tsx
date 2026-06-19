"use client";
import { FC, ReactNode, useEffect, useState } from "react";

interface TProps {
  children: ReactNode;
}

const UserNetworkController: FC<TProps> = ({ children }) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isOnline] = useState<boolean>(
    typeof window != "undefined" ? window.navigator.onLine : false,
  );

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
    return <></>;
  } else {
    return <>{children}</>;
  }
};

export default UserNetworkController;
