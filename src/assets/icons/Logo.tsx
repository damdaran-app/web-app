import Image from "next/image";
import React, { ComponentPropsWithoutRef, FC } from "react";
import LogoBgRed from "../../assets/photos/logoAsli.jpg"

interface TProps extends ComponentPropsWithoutRef<"svg"> {
  size?: string;
  mode: "light" | "dork";
}

const Logo: FC<TProps> = ({ mode, className }) => {
  switch (mode) {
    case "light":
      return (
        <img
          src={LogoBgRed.src}
          alt=""
          width={200}
          height={20}
          className="object-cover rounded-xl w-[115px]"
        />
      );
    case "dork":
      return (
        <img
          src={LogoBgRed.src}
          alt=""
          width={200}
          height={20}
          className="object-cover rounded-xl w-[115px]"
        />
      );
  }
};

export default Logo;
