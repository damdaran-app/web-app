"use server";
import { AxiosResponse } from "axios";
import { createNewsCommentReplay } from "../services/api/get/newsApi";

export const addNewsReplayAction = async (
  prevState: { status: number; message: string },
  formData: FormData,
): Promise<{ status: number; message: string }> => {
  const newsId = formData.get("newsId");
  const commentId = formData.get("commentId");
  const dataObj = {
    title: formData.get("title")?.toString() ?? "",
    description: formData.get("description")?.toString() ?? "",
  };
  try {
    const response: AxiosResponse<{ message: string }> =
      await createNewsCommentReplay(
        `/CreateNewsCommentReplay/${newsId}/${commentId}`,
        dataObj,
      );
    return { message: response?.data?.message, status: response?.status };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { status: error.status, message: error.response.message };
  }
};
