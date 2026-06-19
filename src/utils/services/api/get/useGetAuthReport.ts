import { TAuthReport } from "@/utils/types/api-responses-types";
import { AxiosResponse } from "axios";
import http from "../../interseptor";

export const getAuthReport = async (endUrl: string) => {
  try {
    const response: AxiosResponse<TAuthReport> = await http.get(endUrl);
    return response.data;
  } catch (error) {console.log(error)}
};
