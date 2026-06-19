import { TSignUpDataRequest } from "@/utils/types/auth-type";
import http from "../../interseptor";

export const signUpHandler = async (
  endUrl: string,
  data: TSignUpDataRequest,
) => {
  try {
    const response = await http.post(endUrl, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
