import { TProductsApiParams } from "@/utils/types/products-api-params";
import { GetProductRsponseType } from "@/utils/types/products-type";
import { AxiosResponse } from "axios";
import http from "../../interseptor";

export const getProductServeFn = async (
  endUrl: string,
  params: TProductsApiParams,
): Promise<GetProductRsponseType> => {
  const response: AxiosResponse<GetProductRsponseType> = await http.get(
    endUrl,
    { params: params },
  );
  return response.data;
};
