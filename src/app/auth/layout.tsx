import { FC, ReactNode } from "react";

interface TProps {
  children: ReactNode;
}

const AuthLayout: FC<TProps> = ({ children }) => {
  return <>{children}</>;
};

export default AuthLayout;
