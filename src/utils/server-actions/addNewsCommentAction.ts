"use server";
import { createNewsComment } from "../services/api/get/newsApi";
import { TAddCommentResponse } from "../types/comment-type";

export const addNewsCommentAction = async (
  prevState: TAddCommentResponse,
  formData: FormData,
): Promise<TAddCommentResponse> => {
  const newsId = formData.get("newsId") ?? "";
  const dataObj = {
    title: formData.get("title")?.toString() ?? "",
    description: formData.get("description")?.toString() ?? "",
  };
    const response = await createNewsComment(
      `/CreateNewsComment/${newsId}`,
      dataObj,
    );
    return { status: response?.status, message: response?.message };
};
