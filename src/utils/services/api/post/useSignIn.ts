import { TSignInResponse } from "@/utils/types/api-responses-types";
import { TSignInDataRequest } from "@/utils/types/auth-type";
import { AxiosResponse } from "axios";
import http from "../../interseptor";

export const signInHandler = async (endUrl: string, data: TSignInDataRequest) => {
  try {
    const response: AxiosResponse<TSignInResponse> = await http.post(
      endUrl,
      data,
    );
    return response;
  } catch (error) {console.log(error)}
};
