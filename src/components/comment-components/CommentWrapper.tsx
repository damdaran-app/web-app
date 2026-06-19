"use client";
import { TComment } from "@/utils/types/comment-type";
import { FC, useState } from "react";
import { samimBold } from "../fonts";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

interface TProps extends TComment {
  totalComment: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  commentData: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  replayData: any[] | null;
  dataKey: {
    commentId: string;
    productId: string;
    userPic: string;
    userName: string;
    date: string;
    title: string;
    describe: string;
    likeNum: string;
    deslikeNum: string;
  };
  replayFormInitialValues: {
    title: string;
    description: string;
  };
  actions: {
    addCommentAction: (formData: FormData) => void;
    addReplayCommentAction: (formData: FormData) => void;
    likeCommentAction: (id: string) => void;
    deslikeCommentAction: (id: string) => void;
    showReplayAction: (commentId: string) => void;
  };
  flags: {
    showActionsSection: boolean;
    activedCard: boolean;
  };
}

const CommentWrapper: FC<TProps> = ({
  totalComment,
  commentData,
  replayData,
  dataKey,
  labels,
  placeholder,
  initialValues,
  containerWidth,
  replayFormInitialValues,
  actions,
  flags,
}) => {
  const [commentId, setCommentId] = useState<string>("");
  return (
    <div className="w-full bg-white p-1 rounded-2xl">
      <h1 className="flex items-center gap-x-3">
        <span className={`${samimBold.className} text-[18px]`}>
          همه ی نظرات
        </span>
        <span className="bg-dark text-yellow p-2 text-[14px] rounded-2xl">
          {totalComment}
        </span>
      </h1>
      <CommentForm
        labels={{
          titleLabel: labels.titleLabel,
          descriptionLabel: labels.descriptionLabel,
        }}
        placeholder={{
          titleInput: placeholder.titleInput,
          descriptionInput: placeholder.descriptionInput,
        }}
        initialValues={{
          title: initialValues?.title ?? "",
          description: initialValues?.description ?? "",
        }}
        containerWidth={containerWidth}
        submitAction={actions.addCommentAction}
      />
      <div className="comment-card-control mt-14">
        {commentData?.length > 0 ? (
          commentData?.map((item, index) => (
            <CommentCard
              key={index}
              containerWidth={100}
              id={item[dataKey.commentId]}
              image=""
              userName={item[dataKey.userName]}
              date={item[dataKey.date]}
              title={item[dataKey.title]}
              describe={item[dataKey.describe]}
              likeNum={item[dataKey.likeNum]}
              deslikeNum={item[dataKey.deslikeNum]}
              childrenComp={{
                replayFormComp: (
                  <CommentForm
                    labels={{
                      titleLabel: labels.titleLabel,
                      descriptionLabel: labels.descriptionLabel,
                    }}
                    placeholder={{
                      titleInput: placeholder.titleInput,
                      descriptionInput: placeholder.descriptionInput,
                    }}
                    initialValues={{
                      title: replayFormInitialValues?.title ?? "",
                      description: replayFormInitialValues?.description ?? "",
                    }}
                    containerWidth={80}
                    submitAction={(formData) => {
                      formData.append("commentId", item[dataKey.commentId]);
                      actions.addReplayCommentAction(formData);
                    }}
                  />
                ),
                showReplayComp: item[dataKey.commentId] == commentId && (
                  <div
                    className={`w-full flex flex-col justify-center items-center gap-6 mt-10`}
                  >
                    {replayData && replayData?.length > 0 ? (
                      replayData?.map((item, index) => (
                        <CommentCard
                          key={index}
                          containerWidth={80}
                          image=""
                          userName={item[dataKey.userName]}
                          date={item[dataKey.date]}
                          title={item[dataKey.title]}
                          describe={item[dataKey.describe]}
                          likeNum={item[dataKey.likeNum]}
                          deslikeNum={item[dataKey.deslikeNum]}
                          flags={{
                            showActionsSection: flags.showActionsSection,
                            activedCard: true
                          }}
                        />
                      ))
                    ) : (
                      <h1
                        className={`${samimBold.className} text-center text-2xl`}
                      >
                        ریپلایی وجود ندارد
                      </h1>
                    )}
                  </div>
                ),
              }}
              actions={{
                likeAction: () =>
                  actions.likeCommentAction(item[dataKey.commentId] ?? ""),
                deslikeAction: () =>
                  actions.deslikeCommentAction(item[dataKey.commentId] ?? ""),
                showReplayAction: () => {
                  setCommentId(item[dataKey.commentId]);
                  actions.showReplayAction(item[dataKey.commentId] ?? "");
                },
              }}
              flags={{ showActionsSection: true, activedCard: flags.activedCard }}
            />
          ))
        ) : (
          <h1 className={`${samimBold.className} text-center text-2xl`}>
            کامنتی وجود ندارد
          </h1>
        )}
      </div>
    </div>
  );
};

export default CommentWrapper;
