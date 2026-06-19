// utils/server-actions/comment-actions.ts
"use server";

import { getCommentData } from "@/utils/services/api/get/useGetCommentList";
import { getReplayListHandler } from "../services/api";

export const getUpdatedProductCommentsAction = async (productId: string) => {
  const response = await getCommentData(
    `/getAllProductCommentList/${productId}`,
  );
  return {
    data: response.data,
    totalCount: response.totalCount,
  };
};

export const getUpdatedProductCommentsReplayAction = async (
  productId: string,
  commentId: string,
) => {
  const replayData = await getReplayListHandler(
    `/getAllProductCommentReplayList/${productId}/${commentId}`,
  );
  return {
    data: replayData?.data,
    totalCount: replayData?.totalCount,
  };
};
