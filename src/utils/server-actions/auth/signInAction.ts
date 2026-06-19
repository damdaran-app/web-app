"use server";
import { signInHandler } from "@/utils/services/api";
import { TSignInResponse } from "@/utils/types/api-responses-types";
import { TSignInDataRequest } from "@/utils/types/auth-type";
import { cookies } from "next/headers";

export const signInAction = async (
  prevState: TSignInResponse,
  formData: FormData,
): Promise<TSignInResponse> => {
  const dataObj: TSignInDataRequest = {
    emailOrPhoneNumber: formData.get("emailOrPhoneNumber")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
  };

  try {
    const response = await signInHandler("/signInUser", dataObj);
    const cookieStore = await cookies();
    cookieStore.set("mehrabProjectToken", response?.data.token ?? "");
    if (response?.status == 200) {
      return { message: "successfully", token: response.data.token };
    }
  } catch (error) {
    return { message: "error", token: "" };
  }
  return { message: "", token: "" };
};
