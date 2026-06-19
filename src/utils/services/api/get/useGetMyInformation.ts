import { TMyInformation } from "@/utils/types";
import { AxiosResponse } from "axios";
import http from "../../interseptor";

export const getMyInformation = async (
  endUrl: string,
): Promise<TMyInformation> => {
  const response: AxiosResponse<TMyInformation> = await http.get(endUrl);
  return {
    data: {
      _id: response.data.data._id,
      address: response.data.data.address,
      phoneNumber: response.data.data.phoneNumber,
      homePhone: response.data.data.homePhone,
    },
  };
};
