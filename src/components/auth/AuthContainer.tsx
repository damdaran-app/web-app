import { FC, ReactNode } from "react";

interface TProps {
  rightItemChilde: ReactNode;
  leftItemChilde: ReactNode;
  hideChildeName: "right" | "left";
}

const AuthContainer: FC<TProps> = ({
  rightItemChilde,
  leftItemChilde,
  hideChildeName,
}) => {
  return (
    <div className="w-full h-full flex justify-center items-center mt-8">
      <div
        className="div-controller min-md:h-[600px] w-[70%] min-2xl:w-[900px] max-lg:w-[90%] max-sm:h-auto
        bg-white rounded-3xl flex items-center justify-center gap-4 p-4 max-sm:flex-col-reverse overflow-hidden"
        data-aos="fade-down"
      >
        <div
          className={`right w-2/4 h-full rounded-2xl overflow-hidden flex justify-center items-center max-md:w-full
            ${hideChildeName == "right" ? "max-md:hidden" : ""}`}
          // data-aos="fade-left"
        >
          {rightItemChilde}
        </div>
        <div
          className={`left w-2/4 h-full rounded-2xl overflow-hidden flex justify-center items-center max-md:w-full
            ${hideChildeName == "left" ? "max-md:hidden" : ""}`}
          // data-aos="fade-right"
        >
          {leftItemChilde}
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
