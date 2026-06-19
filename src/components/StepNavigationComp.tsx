import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface TData {
  text: string;
  link: string;
}

interface TProps {
  data: TData[];
}

const StepNavigationComp: FC<TProps> = ({ data }) => {
  return (
    <div className="step-navigation-comp-container flex gap-3">
      {data.map((item, index) => (
        <Link key={index} href={item.link}>
          <button className="flex items-center gap-0.5 cursor-pointer">
            <span>{item.text}</span>
            {<ArrowLeft size={20} />}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default StepNavigationComp;
