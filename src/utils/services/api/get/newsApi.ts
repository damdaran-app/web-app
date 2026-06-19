"use server";
import { TAddNewsRate, TNews } from "@/utils/types/api-responses-types";
import { TAddCommentResponse } from "@/utils/types/comment-type";
import { TNewsApiParams } from "@/utils/types/news-api-params";
import { AxiosResponse } from "axios";
import http from "../../interseptor";
import { getCommentData } from "./useGetCommentList";
import { getProductTypeList } from "./useGetProductType";
import { getReplayListHandler } from "./useGetReplayList";

export const getAllNews = async (
  endUrl: string,
  params: TNewsApiParams,
): Promise<{ data: TNews[]; totalCount: number }> => {
  try {
    const response: AxiosResponse<{ data: TNews[]; totalCount: number }> =
      await http.get(endUrl, { params: params });
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error;
  }
};

export const updateNewsData = async (params: {
  RowsOfPage: string;
  TypeId: string;
}): Promise<{ data: TNews[]; totalCount: number }> => {
  try {
    const response: AxiosResponse<{ data: TNews[]; totalCount: number }> =
      await http.get("/getNewsLists", { params: params });
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error;
  }
};

export const getSingleNews = async (
  endUrl: string,
): Promise<{ data: TNews }> => {
  try {
    const response: AxiosResponse<{ data: TNews }> = await http.get(endUrl);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error;
  }
};

export const getSimilarNewsList = async (
  endUrl: string,
): Promise<{ data: TNews[] }> => {
  try {
    const response: AxiosResponse<{ data: TNews[] }> = await http.get(endUrl);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error;
  }
};

export const getNewsCommentList = async (endUrl: string) => {
  return getCommentData(endUrl);
};

export const getNewsReplayList = async (endUrl: string) => {
  return getReplayListHandler(endUrl);
};

export const getNewsTypeList = async (endUrl: string) => {
  const response = await getProductTypeList(endUrl);
  return response;
};

export const getTopNews = async (
  endUrl: string,
): Promise<{ data: TNews[]; totalCount: number }> => {
  const response: AxiosResponse<{ data: TNews[]; totalCount: number }> =
    await http.get(endUrl);
  return response.data;
};

export const getNewsByRate = async (
  endUrl: string,
): Promise<{ data: TNews[]; totalCount: number }> => {
  try {
    const response: AxiosResponse<{ data: TNews[]; totalCount: number }> =
      await http.get(endUrl);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error;
  }
};

export const addNewsRate = async (
  prevState: { status: number; message: string },
  formData: FormData,
): Promise<{ status: number; message: string }> => {
  const newsId = formData.get("newsId")?.toString() ?? "";
  try {
    const response: AxiosResponse<TAddNewsRate> = await http.post(
      `/addNewsRate/${newsId}`,
    );
    return { status: response?.status, message: response?.data?.message };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { status: error.response.status, message: "" };
  }
};

export const deleteNewsRate = async (
  prevState: { status: number; message: string },
  formData: FormData,
): Promise<{ status: number; message: string }> => {
  const newsId = formData.get("newsId")?.toString() ?? "";
  try {
    const response: AxiosResponse<TAddNewsRate> = await http.post(
      `/deleteNewsRate/${newsId}`,
    );
    return { status: response?.status, message: response?.data?.message };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { status: error.response.status, message: "" };
  }
};

export const createNewsComment = async (
  endUrl: string,
  data: { title: string; description: string },
): Promise<TAddCommentResponse> => {
  try {
    const response: AxiosResponse<{ message: string }> = await http.post(
      endUrl,
      data,
    );
    return { status: response?.status, message: response?.data?.message };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { status: error.status, message: error.response.message };
  }
};

export const createNewsCommentReplay = async (
  endUrl: string,
  data: { title: string; description: string },
) => {
  const response: AxiosResponse<{ message: string }> = await http.post(
    endUrl,
    data,
  );
  return response;
};

export const likeHandler = async (
  newsId: string,
  commentId: string,
): Promise<{ status: number; message: string }> => {
  try {
    const response: AxiosResponse<{ status: number; message: string }> =
      await http.post(`/addNewsCommentLike/${newsId}/${commentId}`);
    return { status: response?.data?.status, message: response?.data?.message };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { status: error.status, message: error.response.message };
  }
};

export const deslikeHandler = async (
  newsId: string,
  commentId: string,
): Promise<{ status: number; message: string }> => {
  const response: AxiosResponse<{ status: number; message: string }> =
    await http.post(`/addNewsCommentDislike/${newsId}/${commentId}`);
  return { status: response?.data?.status, message: response?.data?.message };
};
