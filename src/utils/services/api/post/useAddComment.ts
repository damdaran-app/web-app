"use server";
import { TAddCommentResponse } from "@/utils/types/comment-type";
import http from "../../interseptor";

type AddCommentData = {
  title: string;
  description: string;
};

type AddCommentResponse = {
  message: string;
};

export const addCommentHandler = async (
  endUrl: string,
  data: AddCommentData,
): Promise<TAddCommentResponse> => {
  try {
    const response = await http.post<AddCommentResponse>(endUrl, data);
    return { status: response.status, message: "" };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { status: error.status, message: error.response.message };
  }
};
