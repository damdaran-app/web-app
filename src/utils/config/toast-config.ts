import { samimBold } from "@/components/fonts";
import { ExternalToast } from "sonner";

export const toastConfig: ExternalToast = {
  position: "top-center",
  className: `${samimBold.className}`,
  style: {
    direction: "rtl",
    textAlign: "right",
    marginLeft: "10px",
  },
};
