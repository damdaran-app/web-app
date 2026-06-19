"use server";
import { addCommentHandler } from "../services/api";
import { TAddCommentResponse } from "../types/comment-type";

export const addProductCommentAction = async (
  prevState: TAddCommentResponse,
  formData: FormData,
): Promise<TAddCommentResponse> => {
  const title = formData.get("title")?.toString() ?? "";
  const description = formData.get("description")?.toString() ?? "";
  const productId = formData.get("productId");
  const dataObj = { title, description };
  const response = await addCommentHandler(
    `/createNewComment/${productId}`,
    dataObj,
  );
  return { status: response.status, message: response.message };
};
