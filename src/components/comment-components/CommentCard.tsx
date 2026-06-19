"use client";
import { DesLikeIcon, LikeIcon, MessageIcon } from "@/assets/icons";
import { changeMomentHandler } from "@/utils/hook";
import { TCommentCard } from "@/utils/types/comment-type";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FC, useState } from "react";
import userPic from "../../assets/photos/user2.png";
import CustomBtn from "../CustomBtn";
import { samimBold } from "../fonts";

const CommentCard: FC<TCommentCard> = ({
  id,
  image,
  userName,
  title,
  describe,
  date,
  likeNum,
  deslikeNum,
  containerWidth,
  childrenComp,
  actions,
  flags,
}) => {
  const [showCommentFormFlag, setShowCommentFormFlag] =
    useState<boolean>(false);
  const [showReplayCardFlag, setShowReplayCardFlag] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const commentId = searchParams.get("commentId");
  return (
    <div
      className={`comment-card border-t-border py-4
        ${flags.activedCard ? "border-x-2 border-x-primary px-2 rounded-2xl shadow" : ""}
      `}
      style={{ width: `${containerWidth}%` }}
      data-aos="flip-up"
    >
      <div className="top flex items-center gap-3">
        <div className="image-control w-[55px] h-[55px] rounded-[50%] bg-border overflow-hidden">
          <Image
            src={image && image != "" ? image : userPic.src}
            width={400}
            height={400}
            alt=""
            className="w-full h-full mt-1"
          />
        </div>
        <div className="text-control flex flex-col gap-1">
          <p className={`${samimBold.className} text-[15px]`}>{userName}</p>
          <p className="text-gray text-[13px]">{changeMomentHandler(date)}</p>
        </div>
      </div>
      <div className="center mt-3">
        <p className="text-[15px]">{title}</p>
        <p className="text-[14px] text-gray mt-1.5">{describe}</p>
      </div>
      {flags.showActionsSection && (
        <div className="bottom flex items-center gap-3 mt-3 max-[505px]:flex-col-reverse">
          <CustomBtn
            text={
              showReplayCardFlag && commentId == id
                ? "بستن پاسخ ها"
                : "نمایش پاسخ ها"
            }
            className="flex items-center gap-1.5 cursor-pointer text-[15px] max-[505px]:order-1"
            onClick={() => {
              setShowReplayCardFlag(!showReplayCardFlag);
              actions?.showReplayAction?.();
            }}
          >
            <MessageIcon size={22} />
          </CustomBtn>
          <div className="like-and-dislike-btn-control flex max-[505px]:order-1">
            <CustomBtn
              text={deslikeNum}
              className="flex items-center gap-1.5 cursor-pointer"
              onClick={actions?.deslikeAction}
            >
              <LikeIcon size={22} onClick={() => {}} />
            </CustomBtn>
            <CustomBtn
              text={likeNum}
              className="flex items-center gap-1.5 cursor-pointer"
              onClick={actions?.likeAction}
            >
              <DesLikeIcon size={22} onClick={() => {}} />
            </CustomBtn>
          </div>
          <CustomBtn
            text="پاسخ دادن"
            className="underline text-primary text-[15px] cursor-pointer"
            onClick={() => setShowCommentFormFlag(!showCommentFormFlag)}
          />
        </div>
      )}
      {showCommentFormFlag && (
        <div className="w-full flex justify-center">
          {childrenComp?.replayFormComp}
        </div>
      )}
      {showReplayCardFlag && (
        <div className="">{childrenComp?.showReplayComp}</div>
      )}
    </div>
  );
};

export default CommentCard;
