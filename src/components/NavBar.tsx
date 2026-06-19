"use client";
import { LogoutIcon, MenuIcon } from "@/assets/icons";
import Logo from "@/assets/icons/Logo";
import { navBarData } from "@/utils/constant";
import { deleteTokenAction } from "@/utils/server-actions";
import Link from "next/link";
import {
  FC,
  startTransition,
  useActionState,
  useEffect,
  useState,
} from "react";
import CustomBtn from "./CustomBtn";
import NavigationComp from "./NavigationComp";
import Sidebar from "./Sidebar";

interface IProps {
  pathName: string;
}

const NavBar: FC<IProps> = ({ pathName }) => {
  const [token, setToken] = useState<string>();
  const [sidebarIsOpenFlag, setSidebarIsOpenFlag] = useState<boolean>(false);

  const updateTokenState = () => {
    const tokenData = localStorage.getItem("mehrabProjectToken") ?? "";
    setToken(tokenData);
  };

  useEffect(() => {
    updateTokenState();
  }, []);

  const [actionInitialState] = useState<{
    message: "" | "deleted";
  }>({ message: "" });
  const [state, action] = useActionState(deleteTokenAction, actionInitialState);

  const logoutBtnClickHandler = () => {
    localStorage.removeItem("mehrabProjectToken");
    startTransition(() => action());
    updateTokenState();
  };

  useEffect(() => {}, [state]);

  return (
    <div className="nav-bar w-full flex justify-between gap-x-6 items-center max-881px:flex-row-reverse z-40">
      <div className="right w-[30%] max-881px:w-auto max-881px:flex max-881px:justify-end">
        <Logo mode={pathName != "/" ? "dork" : "light"} className="w-[100px]" />
      </div>
      <div className="center flex justify-center items-center min-881px:gap-x-8 max-881px:w-[60%]">
        <div className="navcomponent-control w-full max-881px:hidden block">
          <NavigationComp
            pathName={pathName}
            data={navBarData}
            clickFlag={false}
            isLink
          />
        </div>
      </div>
      <div className="left w-[30%] flex justify-end items-center gap-10 max-881px:w-auto max-881px:justify-start">
        <div className="btn-control max-881px:hidden block">
          {!token ? (
            <Link href={"/auth/sign-in"}>
              <CustomBtn
                text="ثبت نام / ورود"
                className="bg-yellow text-dark ml-3 text-[14px] cursor-pointer"
              />
            </Link>
          ) : (
            <LogoutIcon
              size={35}
              color={pathName != "/" ? "black" : "white"}
              onClick={() => logoutBtnClickHandler()}
            />
          )}
        </div>
        <div className="menu2-control max-881px:block hidden">
          <MenuIcon
            size={33}
            className={`${pathName != "/" ? "text-black" : "text-white"} cursor-pointer mr-6`}
            onClick={() => setSidebarIsOpenFlag(true)}
          />
        </div>
      </div>
      <div className="sidebar-controller max-881px:block hidden z-[999]">
        <Sidebar
          isOpen={sidebarIsOpenFlag}
          toggel={() => setSidebarIsOpenFlag(false)}
        />
      </div>
    </div>
  );
};

export default NavBar;
