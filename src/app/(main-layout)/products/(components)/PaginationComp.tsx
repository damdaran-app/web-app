"use client";
import { CustomPagination } from "@/components";
import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";

interface IProps {
  total: number;
  limit: number;
}

const PaginationComp: FC<IProps> = ({ total }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageParam = Number(searchParams.get("PageNumber"));
  const currentPage = pageParam > 0 ? pageParam : 1;

  const changePageHandler = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("PageNumber", page.toString());
    router.push(`products?${params}`);
  };

  // ✅ وقتی فقط ۰ یا ۱ صفحه داریم
  if (total <= 1) return null;

  return (
    <CustomPagination
      page={currentPage}
      total={total}
      onChange={changePageHandler}
    />
  );
};

export default PaginationComp;
