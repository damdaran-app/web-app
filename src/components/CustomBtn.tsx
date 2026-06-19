import { TCustomBtn } from "@/utils/types";
import { FC } from "react";

const CustomBtn: FC<TCustomBtn> = ({
  text,
  pendingText,
  pendingFlag,
  children,
  className,
  onClick,
  type,
}) => {
  if (children) {
    return (
      <button
        type={type}
        className={`rounded-2xl py-2.5 px-3.5 ${className}`}
        onClick={onClick}
      >
        {children}
        {text}
      </button>
    );
  } else {
    return (
      <button
        className={`rounded-2xl py-2.5 px-3.5 ${className}`}
        onClick={onClick}
        type={type}
      >
        {pendingFlag ? pendingText : text}
      </button>
    );
  }
};

export default CustomBtn;
