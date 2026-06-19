import { TCoomentAboutUse } from "@/utils/types";
import { TCommentAboutUseAction } from "@/utils/types/action-types";
import { AxiosResponse } from "axios";
import http from "../../interseptor";

export const postCommentAboutUseHandler = async (
  endUrl: string,
  data: TCoomentAboutUse,
): Promise<TCommentAboutUseAction> => {
  try {
    const response: AxiosResponse<TCommentAboutUseAction> = await http.post(
      endUrl,
      data,
    );
    return {
      status: response.status,
      message: response?.data?.message,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { status: error.status, message: error.response.message };
  }
};
