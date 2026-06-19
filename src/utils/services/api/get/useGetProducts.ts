"use server";
import { TProductsApiParams } from "@/utils/types/products-api-params";
import { GetProductRsponseType } from "@/utils/types/products-type";
import { AxiosResponse } from "axios";
import http from "../../interseptor";

export const getProductList = async (
  endUrl: string,
  params: TProductsApiParams,
): Promise<GetProductRsponseType> => {
  try {
    const response: AxiosResponse<GetProductRsponseType> = await http.get(
      endUrl,
      { params: params },
    );
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error;
  }
};

export const updateProductData = async (params: TProductsApiParams) => {
  const response = await getProductList(`/getProductLists`, params);
  return response;
};
