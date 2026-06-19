"use server";
import { AxiosResponse } from "axios";
// import { useQuery } from "react-query";
import http from "../../interseptor";

// export const useGetReplayListHandler = (
//   key: string,
//   endUrl: string,
//   enabledFlag: boolean,
// ) => {
//   return useQuery({
//     queryKey: [key],
//     queryFn: async () => {
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       const response: AxiosResponse<{ data: any[]; totalCount: number }> =
//         await http.get(endUrl);
//       return response.data;
//     },
//     enabled: enabledFlag,
//   });
// };

export const getReplayListHandler = async (endUrl: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response: AxiosResponse<{ data: any[]; totalCount: number }> =
    await http.get(endUrl);
  return response.data;
};
