import Footer from "@/components/Footer";
import UserNetworkController from "@/components/root-controller/UserNetworkController";
import { FC, ReactNode } from "react";

interface TProps {
  children: ReactNode;
}

const MainLayout: FC<TProps> = ({ children }) => {
  return (
    <>
      {children}
      <UserNetworkController>
        <Footer />ّ
      </UserNetworkController>
    </>
  );
};

export default MainLayout;
