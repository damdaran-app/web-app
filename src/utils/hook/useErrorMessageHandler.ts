"use client";
import { toast } from "sonner";
import { toastConfig } from "../config";

interface TProps {
  status: number;
  message?: {
    successMessage?: string;
    errorMessage?: string;
  };
  callbackFn?: () => void;
}

export const errorMessageHandler = ({
  status,
  message,
  callbackFn,
}: TProps) => {
  switch (status) {
    case 200:
      toast.success(
        message?.successMessage && message?.successMessage != ""
          ? message?.successMessage
          : "عملیات با موفقیت انجام شد",
        { ...toastConfig },
      );
      callbackFn?.();
      break;
    case 201:
      toast.success(
        message?.successMessage && message?.successMessage != ""
          ? message?.successMessage
          : "دیتای جدید با موفقیت افزوده شد",
        { ...toastConfig },
      );
      callbackFn?.();
      break;
    case 400:
      toast.warning(
        message?.errorMessage,
        toastConfig,
      );
      callbackFn?.();
      break;
    case 401:
      toast.warning(
        "برای استفاده از امکانات بیشتر لطفا ابتدا وارد حساب کاربری خود شوید",
        toastConfig,
      );
      callbackFn?.();
      break;
    case 500:
      toast.error(
        "خطایی سمت سرور رخ داده است، لطفا کمی صبر و دوباره امتحان کنید",
        toastConfig,
      );
      callbackFn?.();
      break;
  }
};
