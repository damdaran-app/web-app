"use client";
import {
  GemailIcon,
  InstagramIcon,
  Logo,
  TelIcon,
  TelMessageIcon,
  TelegramIcon,
} from "@/assets/icons";
import Link from "next/link";
import FinalLogo from "../assets/photos/logo.jpg";
import { useEffect, useState } from "react";
import { GetDataResponse, TLandingReport } from "@/utils/types";
import { getLandingReport } from "@/utils/services/api";

const Footer = () => {
  const [landingData, setLandingData] = useState<
    GetDataResponse<TLandingReport>
  >({ success: false, message: "" });

  const getData = async () => {
    const response = await getLandingReport("/getLandingReport");
    setLandingData(response);
  };

  useEffect(() => {
    getData();
  }, []);

  if (landingData.success) {
    return (
      <div className="footer-control w-full flex justify-center mt-14">
        <div className="footer w-[95%] max-lg:w-full bg-[#2D2D2D] p-6 rounded-4xl max-lg:rounded-b-none max-sm:p-2">
          <div className="top-item-control flex gap-10 justify-between flex-wrap max-[455px]:justify-center">
            <div className="items-control max-sm:w-full">
              <div className="top flex items-center max-sm:flex-col max-sm:justify-center">
                <div className="logo-control max-sm:flex max-sm:justify-center">
                  {/* <Logo mode="dork" /> */}
                  {/* <Image src={FinalLogo.src} alt=""/> */}
                  {/* <img src={FinalLogo.src} alt="" className=""/> */}
                </div>
                <div className="icons-control w-full flex items-center gap-4 max-sm:justify-center max-sm:mt-4">
                  <GemailIcon size={40} />
                  <TelMessageIcon size={40} />
                  <Link href={"https://t.me/DamdaranGroup"} target="_blank">
                    <TelegramIcon size={40} />
                  </Link>
                  <InstagramIcon size={40} />
                </div>
              </div>
              <p className="w-[320px] text-white mt-6 leading-8 max-sm:w-auto max-sm:text-center">
                ۲۷ سال در بازاری که هنوز سنتیست. دامداران اولین مرجع تخصصی گوشت
                وارداتی منجمد در ایران است — با شفافیت کامل در منشأ، گرید و
                کیفیت. برای مشتریانی که با علم انتخاب می‌کنند.
              </p>
            </div>

            <div className="flex flex-col gap-y-4 w-[250px] max-[455px]:w-full max-[455px]:text-center">
              <h1 className="text-yellow text-[18px]"> تماس و خدمات ارسال </h1>
              <h6 className="text-white text-[14px]">
                ارسال داخلی ، استانی و کشوری
              </h6>
              <button className="flex items-center gap-2 max-[455px]:justify-center">
                <TelIcon size={25} />
                <span className="text-white text-[14px]">
                  {" "}
                  مدیریت : 09112510544{" "}
                </span>
              </button>
              <p className="text-[14px] text-white">
                واحد فروش :09119513008-33377873-011 09112800689-09330390333
              </p>
              <button className="flex items-center gap-2 max-[455px]:justify-center">
                <TelIcon size={25} />
                <span className="text-white text-[14px]">
                  مدیریت داخلی و مشاوره: 09112800689
                </span>
              </button>
              <h6 className="text-white text-[14px]">
                ساعت کاری و پاسخگویی از شنبه تا پنجشنبه ساعت 7:30 تا 9 شب
              </h6>
              <h6 className="text-white text-[14px] w-full">
                آدرس : مازندران ساری چهار راه شهر اشوب خیابان رازی رو به روی
                رازی ۴
              </h6>
            </div>
            <div className="flex flex-col gap-y-4 max-[455px]:w-full max-[455px]:text-center">
              <h1 className="text-yellow text-[18px]">
                ارتباط با ما در سوشال مدیا
              </h1>
              <Link
                href={"https://t.me/DamdaranGroup"}
                className="text-white text-[14px]"
                target="_blank"
              >
                تلگرام: <span className="text-yellow">DamdaranGroup@</span>
              </Link>
              <Link
                href={"https://maps.app.goo.gl/NSpxWUEqxAeVZB4q6"}
                className="text-white text-[14px]"
                target="_blank"
              >
                لوکیشن آنلاین:{" "}
                <span className="text-yellow">
                  {" "}
                  برای ورود به googlemaps کلیک کنید{" "}
                </span>
              </Link>
              {/* <h6 className="text-white text-[14px]"> درباره ما </h6>
              <h6 className="text-white text-[14px]"> مقالات </h6> */}
            </div>
            <div className="w-[200px] h-[200px] rounded-2xl overflow-hidden">
              <img
                src={FinalLogo.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <hr className="outline-0 border-none w-full h-[1px] bg-yellow mt-7" />
          <p className="text-yellow text-center mt-5">
            {" "}
            تمامی حقوق سایت متعلق به گوشت دامداران می باشد{" "}
          </p>
        </div>
      </div>
    );
  } else {
    <></>;
  }
};

export default Footer;
