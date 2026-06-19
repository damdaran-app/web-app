"use client";
import { TNavBar } from "@/utils/types";
import Link from "next/link";
import { FC, useState } from "react";
import { samimBold } from "./fonts";

const NavigationComp: FC<TNavBar> = ({
  pathName,
  data,
  clickFlag,
  isLink,
  click,
  className,
}) => {
  const [link, setLink] = useState<string>("");
  if (isLink) {
    return (
      <div
        className={`navigation-comp flex justify-center gap-x-8 ${className}`}
      >
        {data.map((item, index) => {
          // setValidationPathName(item.link.includes(pathName))
          return (
            <Link href={item.link} key={index}>
              <h1
                onClick={() => setLink(item.link)}
                className={`flex flex-col items-center gap-y-2 text-nowrap ${
                  pathName == "/"
                    ? "text-white"
                    : `text-black
                ${index != 0 && pathName.includes(item.link) ? `${samimBold.className}` : ``}`
                } ${
                  clickFlag && pathName.includes(link)
                    ? `text-black`
                    : pathName == "/"
                      ? "text-white"
                      : `text-black`
                }`}
              >
                {item.text}
                {/* {pathName == item.link && (
                  <hr
                    className={`border-0 outline-0 w-full h-[1px]  ${
                      pathName == "/" ? "bg-white" : "bg-black"
                    } ${
                      clickFlag && pathName.includes(link)
                        ? "bg-black"
                        : pathName == "/"
                          ? "text-white"
                          : "text-black"
                    }`}
                  />
                )} */}
                {index != 0 && pathName.includes(item.link) ? (
                  <hr
                    className={`border-0 outline-0 w-full h-[1px]  ${
                      pathName == "/" ? "bg-white" : "bg-black"
                    } ${
                      clickFlag && pathName.includes(link)
                        ? "bg-black"
                        : pathName == "/"
                          ? "text-white"
                          : "text-black"
                    }`}
                  />
                ) : (
                  <></>
                )}
              </h1>
            </Link>
          );
        })}
      </div>
    );
  } else {
    return (
      <div
        className={`navigation-comp flex justify-center gap-x-8 ${className}`}
      >
        {data.map((item, index) => (
          <h1
            key={index}
            className={`${samimBold.className} flex flex-col items-center gap-y-2 cursor-pointer ${
              pathName == "/" ? "text-white" : "text-black"
            } ${
              clickFlag && pathName.includes(link)
                ? "text-black"
                : pathName == "/"
                  ? "text-white"
                  : "text-black"
            }`}
            onClick={() => {
              click?.(item.link);
              setLink(item.link);
            }}
          >
            {item.text}
            {pathName == item.link && (
              <hr
                className={`border-0 outline-0 w-full h-[2px] ${
                  pathName == "/" ? "bg-white" : "bg-black"
                } ${
                  clickFlag && pathName.includes(link)
                    ? "bg-black"
                    : pathName == "/"
                      ? "text-white"
                      : "text-black"
                }`}
              />
            )}
          </h1>
        ))}
      </div>
    );
  }
};

export default NavigationComp;
