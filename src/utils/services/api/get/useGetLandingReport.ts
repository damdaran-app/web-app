import { TLandingReport } from "@/utils/types";
import { AxiosResponse } from "axios";
import http from "../../interseptor";

export const getLandingReport = async (
  endUrl: string,
): Promise<TLandingReport> => {
  const response: AxiosResponse<TLandingReport> = await http.get(endUrl);
  return {
    data: {
      aboutMeAndMyWork: response.data?.data.aboutMeAndMyWork,
      aboutProducts: response.data?.data.aboutProducts,
      headingText: response.data?.data.headingText,
      ourPositivePoints: response.data?.data.ourPositivePoints,
      singleQuestion: response.data?.data.singleQuestion,
      frequentlyAskedQuestions: response.data?.data.frequentlyAskedQuestions,
    },
  };
};
