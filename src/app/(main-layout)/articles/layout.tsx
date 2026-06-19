import { FC, ReactNode } from "react";

interface TProps {
  children: ReactNode;
}

export const metadata = {
  title: "صفحه مقالات",
  description: "This is the news page of my site",
};

const layout: FC<TProps> = ({ children }) => {
  return <>{children}</>;
};

export default layout;
