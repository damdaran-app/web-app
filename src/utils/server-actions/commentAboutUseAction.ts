"use server";
import { postCommentAboutUseHandler } from "../services/api";
import { TCommentAboutUseAction } from "../types/action-types";

export const commentAboutUseAction = async (
  prevState: TCommentAboutUseAction,
  formData: FormData,
): Promise<TCommentAboutUseAction> => {
  const fullName = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const newData = {
    fullName,
    email,
    message,
  };

  const response = await postCommentAboutUseHandler("/AddCommentAboutUse", newData);
  return {
    status: response.status,
    message: response.message,
  };
};
