"use server";
import { TFilteringSort } from "@/utils/types/api-responses-types";
import { AxiosResponse } from "axios";
import http from "../../interseptor";

export const getFiltersDataHandler = async (
  endUrl: string,
): Promise<{
  message: string;
  data: TFilteringSort[];
}> => {
  const response: AxiosResponse<{
    message: string;
    data: TFilteringSort[];
  }> = await http.get(endUrl);
  return response.data;
};
