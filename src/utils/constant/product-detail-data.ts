interface IProps {
  pic: string;
  title: string;
  description: string;
}

import pic2 from "../../assets/photos/Calling-pana 1.png";
import pic4 from "../../assets/photos/Chat-pana 1.png";
import pic3 from "../../assets/photos/Messenger-pana 1.png";
import pic1 from "../../assets/photos/question1.png";

export const optionsData: IProps[] = [
  {
    pic: pic1.src,
    title: "ارسال سریع و مطمئن",
    description:
      "داخل شهری ۱۰ دقیقه تا ۱ ساعت، مازندران ۱ تا ۴ ساعت، کشوری سریع.",
  },
  {
    pic: pic2.src,
    title: "سفارش تلفنی",
    description:
      "ثبت سفارش آسان از طریق تماس تلفنی، با تنوع گرید و نژادهای برتر دنیا.",
  },
  {
    pic: pic3.src,
    title: "پرداخت درب منزل",
    description: "پرداخت نقدی یا با کارت‌خوان هنگام تحویل سفارش، راحت و مطمئن.",
  },
  {
    pic: pic4.src,
    title: "پشتیبانی 24 ساعته",
    description:
      "پاسخگویی و ثبت سفارش در تمام ساعات شبانه‌روز، حتی ایام تعطیل.",
  },
];
