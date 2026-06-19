"use client";
import { DesLikeIcon, LikeIcon } from "@/assets/icons";
import { errorMessageHandler } from "@/utils/hook";
import {
  addNewsRate,
  deleteNewsRate,
  getSingleNews,
} from "@/utils/services/api/get/newsApi";
import { TNews } from "@/utils/types/api-responses-types";
import {
  FC,
  startTransition,
  useActionState,
  useEffect,
  useState,
} from "react";
import { samimBold } from "./fonts";

interface TProps {
  targetId: string;
}

const AddRateComp: FC<TProps> = ({ targetId }) => {
  const [newsData, setNewsData] = useState<TNews>();

  const [addRateInitialState] = useState<{
    status: number;
    message: string;
  }>({ status: 0, message: "" });
  const [addState, action] = useActionState(addNewsRate, addRateInitialState);

  const [deleteRateInitialState] = useState<{
    status: number;
    message: string;
  }>({ status: 0, message: "" });
  const [deleteState, deleteAction] = useActionState(
    deleteNewsRate,
    deleteRateInitialState,
  );

  const addLike = async () => {
    const formData = new FormData();
    formData.append("newsId", targetId);
    startTransition(() => action(formData));
  };

  const deleteRate = async () => {
    const formData = new FormData();
    formData.append("newsId", targetId);
    startTransition(() => deleteAction(formData));
  };

  useEffect(() => {
    errorMessageHandler({
      status: addState?.status,
      message: { successMessage: addState?.message },
      callbackFn: async () => {
        const response = await getSingleNews(`/getSingleNews/${targetId}`);
        setNewsData(response?.data);
      },
    });
    errorMessageHandler({
      status: deleteState.status,
      message: { successMessage: deleteState?.message },
      callbackFn: async () => {
        const response = await getSingleNews(`/getSingleNews/${targetId}`);
        setNewsData(response?.data);
      },
    });
  }, [addState, deleteState, targetId]);

  useEffect(() => {
    const getData = async () => {
      const response = await getSingleNews(`/getSingleNews/${targetId}`);
      setNewsData(response?.data);
    };
    getData();
  }, [targetId]);

  return (
    <div className="add-rate-comp w-full p-4 bg-lightGray rounded-3xl flex items-center max-sm:flex-col max-sm:gap-y-6">
      <div className="right w-2/4 h-full flex items-center max-sm:w-full">
        <p className={`title ${samimBold.className}`}>
          <span> آیا مقاله </span>
          <span className="text-red-600">{newsData?.title}</span>
          <span> برایتان مفید بوده است ؟ </span>
        </p>
      </div>
      <div className="left w-2/4 h-full flex items-center justify-end gap-6 ml-3 max-sm:w-full max-sm:justify-center">
        <div className="like-item-control flex items-center gap-2">
          <LikeIcon size={40} views="2" onClick={addLike} />
          <span className="text-2xl">{newsData?.likeCount}</span>
        </div>
        <div className="deslike-item-control flex items-center gap-2">
          <DesLikeIcon size={40} view="2" onClick={deleteRate} />
          <span className="text-2xl">{newsData?.dislikeCount}</span>
        </div>
      </div>
    </div>
  );
};

export default AddRateComp;
