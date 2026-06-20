import { GetDataResponse, TLandingReport } from "@/utils/types";
import { AxiosResponse, isAxiosError } from "axios";
import http from "../../interseptor";

export const getLandingReport = async (
  endUrl: string,
): Promise<GetDataResponse<TLandingReport>> => {
  try {
    const response: AxiosResponse<GetDataResponse<TLandingReport>> =
      await http.get(endUrl);
    if (isAxiosError(response)) {
      return {
        success: false,
        message: "get data error!",
      };
    }
    return {
      success: true,
      message: "get data successfully",
      data: {
        aboutMeAndMyWork: response.data?.data?.aboutMeAndMyWork,
        aboutProducts: response.data?.data?.aboutProducts,
        headingText: response.data?.data?.headingText,
        ourPositivePoints: response.data?.data?.ourPositivePoints,
        singleQuestion: response.data?.data?.singleQuestion,
        frequentlyAskedQuestions: response.data?.data?.frequentlyAskedQuestions,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: "Network Error!",
    };
  }
};
