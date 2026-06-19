import { FC, ReactNode } from "react";

interface TProps {
  children: ReactNode;
}

const ArticleCategoriesLayout: FC<TProps> = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

export default ArticleCategoriesLayout;
