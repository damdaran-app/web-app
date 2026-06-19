"use client";
import { productDetailNavigationStore } from "@/utils/store";
import { FC, ReactNode, useEffect } from "react";

interface IProps {
  aboutProduct: ReactNode;
  userComments: ReactNode;
  // addUserComment: ReactNode;
}

const DynamicComponentController: FC<IProps> = ({
  aboutProduct,
  userComments,
  // addUserComment,
}) => {
  const { link } = productDetailNavigationStore();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  switch (link) {
    case "aboutProduct":
      return <>{aboutProduct}</>;
    case "userComments":
      return <>{userComments}</>;
    case "addUserComment":
      // return <>{addUserComment}</>;
  }
};

export default DynamicComponentController;
