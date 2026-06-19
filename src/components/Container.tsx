import { TContainer } from "@/utils/types";
import { FC } from "react";

const Container: FC<TContainer> = ({ children }) => {
  return (
    <div className="w-full h-full p-3.5 bg-white border border-border rounded-3xl">
      {children}
    </div>
  );
};

export default Container;
