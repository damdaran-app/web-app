import { TProductData } from "@/utils/types/products-type";
import { AxiosResponse } from "axios";
import http from "../../interseptor";

export const getSingleProduct = async (endUrl: string) => {
  try {
    const response: AxiosResponse<{ meesage: string; data: TProductData }> =
      await http.get(endUrl);
    return response.data;
  } catch (error) {console.log(error)}
};
