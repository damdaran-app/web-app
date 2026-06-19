"use server";
import { addCommentHandler } from "../services/api";
import { TAddCommentResponse } from "../types/comment-type";

export const addProductCommentReplayAction = async (
  prevState: TAddCommentResponse,
  formData: FormData,
): Promise<TAddCommentResponse> => {
  const productId = formData.get("productId");
  const commentId = formData.get("commentId");
  const title = formData.get("title")?.toString() ?? "";
  const description = formData.get("description")?.toString() ?? "";

  const response = await addCommentHandler(
    `/createNewCommentReplay/${productId}/${commentId}`,
    { title, description },
  );

  // if (response.message == "successfully") {
  //   return { message: "successfully" };
  // } else if (response.message == "error") {
  //   return { message: "error" };
  // } else {
  //   return { message: "" };
  // }
  return { status: response.status, message: response.message };
};
