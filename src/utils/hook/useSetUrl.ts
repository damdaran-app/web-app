"use client";

interface IData {
  name: string;
  value: string | null;
}

interface IUseSetUrl {
  data?: IData[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useRouter: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useSearchParams: any;
  pathname?: string;
}

export const setUrl = ({
  useSearchParams,
  useRouter,
  data,
  pathname,
}: IUseSetUrl) => {
  const params = new URLSearchParams(useSearchParams?.toString() || "");
  data?.forEach((item) => params.set(item.name, item.value ?? ""));
  useRouter.push(`${pathname || ""}?${params.toString()}`, { scroll: false });
};
