"use server";
import { TCommentData } from "@/utils/types/comment-type";
import { AxiosResponse } from "axios";
// import { useQuery } from "react-query";
import http from "../../interseptor";
import { getReplayListHandler } from "./useGetReplayList";
// export const useGetCommentListHandler = (key: string, endUrl: string) => {
//   return useQuery({
//     queryKey: [key],
//     queryFn: async () => {
//       const response: AxiosResponse<{
//         data: TCommentData[];
//         totalCount: number;
//       }> = await http.get(endUrl);
//       return response.data;
//     },
//   });
// };

export const getCommentData = async (endUrl: string) => {
  const response: AxiosResponse<{
    data: TCommentData[];
    totalCount: number;
  }> = await http.get(endUrl);
  return response.data;
};

export const updateNewsCommentDataList = async (articleId: string) => {
  const response = await getCommentData(`/getNewsCommentList/${articleId}`);
  return response;
};

export const getNewsReplayData = async (newsId: string, commentId: string) => {
  const response = await getReplayListHandler(
    `/getSingleReplay/${newsId}/${commentId}`,
  );
  return response;
};
