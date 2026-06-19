"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const OfflinePage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleOnline = () => router.push("/");
    window.addEventListener("online", handleOnline);
    return () => window.removeEventListener("online", handleOnline);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">🚫 اتصال اینترنت قطع شده</h1>
      <p className="text-gray-600">لطفاً اتصال اینترنت خود را بررسی کنید.</p>
    </div>
  );
};

export default OfflinePage;
