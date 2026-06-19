import { GetProductRsponseType } from "@/utils/types/products-type";
import { AxiosResponse } from "axios";
import http from "../../interseptor";

export const getSimilarProduct = async (endUrl: string) => {
  const response: AxiosResponse<GetProductRsponseType> = await http.get(endUrl);
  return response.data;
};
