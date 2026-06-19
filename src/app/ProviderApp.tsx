"use client";
import AosConfigComp from "@/components/AosConfigComp";
import { TProviderApp } from "@/utils/types";
import { HeroUIProvider } from "@heroui/react";
import { FC } from "react";
import { Toaster } from "sonner";

const ProviderApp: FC<TProviderApp> = ({ children }) => {
  return (
    <HeroUIProvider>
        <Toaster
          toastOptions={{
            className: "max-sm:!ml-[30px]",
          }}
          position="top-right"
        />
        <AosConfigComp />
        {children}
    </HeroUIProvider>
  );
};

export default ProviderApp;
