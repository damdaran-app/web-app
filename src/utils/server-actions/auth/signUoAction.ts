"use server";
import { signUpHandler } from "@/utils/services/api";
import { TAuthrization } from "@/utils/types/api-responses-types";
import { TSignUpDataRequest } from "@/utils/types/auth-type";

export const signUpAction = async (
  prevState: TAuthrization,
  formData: FormData,
): Promise<TAuthrization> => {
  const dataObj: TSignUpDataRequest = {
    emailOrPhoneNumber: formData.get("emailOrPhoneNumber")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
    confirmPassword: formData.get("confirmPassword")?.toString() ?? "",
  };
  const response = await signUpHandler("/signUpUser", dataObj);
  if (response?.status == 201) {
    return { message: "successfully" };
  }
  return { message: "error" };
};
