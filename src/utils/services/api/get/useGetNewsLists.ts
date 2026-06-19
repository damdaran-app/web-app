import { TNews, TNewsResponse } from "@/utils/types/api-responses-types";
import { TNewsApiParams } from "@/utils/types/news-api-params";
import { AxiosResponse } from "axios";
import http from "../../interseptor";

export const getNewsLists = async (
  endUrl: string,
  params: TNewsApiParams,
): Promise<TNews[]> => {
  const response: AxiosResponse<TNewsResponse> = await http.get(endUrl, {
    params: params,
  });
  return response.data.data;
};
