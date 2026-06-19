"use server";
import { ProductTypeResponseType } from "@/utils/types/api-responses-types";
import { AxiosResponse } from "axios";
import http from "../../interseptor";

// export const useGetProductsTypeHandler = (
//   key: string,
//   endUrl: string,
//   enabled: boolean,
// ) => {
//   return useQuery({
//     queryKey: [key],
//     queryFn: async () => {
//       const response: AxiosResponse<ProductTypeResponseType> =
//         await http.get(endUrl);
//       return response;
//     },
//     enabled: enabled,
//   });
// };

export const getProductTypeList = async (endUrl: string): Promise<ProductTypeResponseType> => {
  try {
    const response: AxiosResponse<ProductTypeResponseType> =
      await http.get(endUrl);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error
  }
};
