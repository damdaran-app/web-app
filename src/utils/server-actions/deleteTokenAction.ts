"use server";
import { cookies } from "next/headers";

export const deleteTokenAction = async (prevState: {
  message: "" | "deleted";
}): Promise<{ message: "" | "deleted" }> => {
  const cookieStore = await cookies();
  cookieStore.delete("mehrabProjectToken");
  return {
    message: "deleted",
  };
};
