"use server";
import { AxiosResponse } from "axios";
import http from "../../interseptor";

export const likeCommentHandler = async (
  endUrl: string,
): Promise<{
  status: number;
  message: string;
}> => {
  try {
    const response: AxiosResponse<{ message: string }> =
      await http.post(endUrl);
    return {
      message: response?.data?.message,
      status: response?.status,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      message: error.response.message,
      status: error.status,
    };
  }
};

export const deslikeCommentHadler = async (
  endUrl: string,
): Promise<{
  status: number;
  message: string;
}> => {
  try {
    const response: AxiosResponse<{ message: string }> =
      await http.post(endUrl);
    return {
      message: response?.data?.message,
      status: response?.status,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      message: error.response.message,
      status: error.status,
    };
  }
};
