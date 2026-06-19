"use client";
import { CustomBtn } from "@/components";
import { setUrl } from "@/utils/hook/useSetUrl";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

interface TProps {
  limit: number;
}

const ChangeLimitComp: FC<TProps> = ({ limit }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [limitChange, setLimitChange] = useState<number>(Number(limit));

  useEffect(() => {
    setUrl({
      useRouter: router,
      useSearchParams: searchParams,
      data: [{ name: "RowsOfPage", value: limitChange.toString() }],
    });
  }, [limitChange, router, searchParams]);
  return (
    <CustomBtn
      text="نمایش بیشتر"
      onClick={() => setLimitChange(limit + 8)}
      className="border border-solid border-border rounded-3xl cursor-pointer mt-12"
    />
  );
};

export default ChangeLimitComp;
