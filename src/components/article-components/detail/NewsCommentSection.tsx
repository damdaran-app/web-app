"use client";
import CommentWrapper from "@/components/comment-components/CommentWrapper";
import { errorMessageHandler } from "@/utils/hook";
import {
  addNewsCommentAction,
  addNewsReplayAction,
} from "@/utils/server-actions";
import { deslikeCommentHadler, likeCommentHandler } from "@/utils/services/api";
import { TAddCommentResponse, TCommentData } from "@/utils/types/comment-type";
import {
  FC,
  startTransition,
  useActionState,
  useEffect,
  useState,
} from "react";

interface TProps {
  articleId: string;
  initialCommentData: {
    data: TCommentData[];
    totalCount: number;
  };
  updateCommentList: (articleId: string) => Promise<{
    data: TCommentData[];
    totalCount: number;
  }>;
  getReplayData: (
    articleId: string,
    commentId: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => Promise<{ data: any[]; totalCount: number }>;
}

const NewsCommentSection: FC<TProps> = ({
  articleId,
  initialCommentData,
  updateCommentList,
  getReplayData,
}) => {
  const [commentId, setCommentId] = useState<string>("");
  const [commentData, setCommentData] = useState<{
    data: TCommentData[];
    totalCount: number;
  }>(initialCommentData);
  const [replayData, setReplayData] = useState<{
    data: TCommentData[];
    totalCount: number;
  }>();

  const [addCommentInitialState] = useState<TAddCommentResponse>({
    status: 0,
    message: "",
  });
  const [addCommentState, addCommentAction] = useActionState(
    addNewsCommentAction,
    addCommentInitialState,
  );

  const addCommetHandler = async (formData: FormData) => {
    formData.append("newsId", articleId);
    startTransition(() => addCommentAction(formData));
  };

  const [addReplayInitialState] = useState<TAddCommentResponse>({
    status: 0,
    message: "",
  });
  const [addReplayState, addReplayAction] = useActionState(
    addNewsReplayAction,
    addReplayInitialState,
  );

  const addReplayHandler = async (formData: FormData) => {
    formData.append("newsId", articleId);
    startTransition(() => addReplayAction(formData));
  };

  useEffect(() => {
    errorMessageHandler({
      status: addCommentState.status,
      message: {
        successMessage: addCommentState.message,
        errorMessage: addCommentState.message,
      },
      callbackFn: async () => {
        const commentNewData = await updateCommentList(articleId);
        setCommentData(commentNewData);
      },
    });
    errorMessageHandler({
      status: addReplayState.status,
      message: {
        successMessage: addReplayState.message,
        errorMessage: addReplayState.message,
      },
      callbackFn: async () => {
        const newReplayData = await getReplayData(articleId, commentId);
        setReplayData(newReplayData);
      },
    });
  }, [
    addCommentState,
    addReplayState,
    articleId,
    commentId,
    getReplayData,
    updateCommentList,
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {commentData && (
        <CommentWrapper
          containerWidth={100}
          labels={{
            titleLabel: "عنوان دیدگاه",
            descriptionLabel: "متن دیدگاه",
          }}
          initialValues={{
            title: "",
            description: "",
          }}
          placeholder={{
            titleInput: "عنوان دیدگاه خود را بنویسید",
            descriptionInput: "متن دیدگاه خود را بنویسید",
          }}
          totalComment={commentData?.totalCount.toString()}
          commentData={commentData?.data}
          replayData={replayData?.data ?? []}
          replayFormInitialValues={{ title: "", description: "" }}
          dataKey={{
            commentId: "_id",
            productId: "newsId",
            userName: "userName",
            title: "title",
            date: "createAt",
            describe: "description",
            deslikeNum: "desLikeCount",
            likeNum: "likeCount",
            userPic: "userPic",
          }}
          actions={{
            addCommentAction: (formData) => addCommetHandler(formData),
            addReplayCommentAction: (formData) => addReplayHandler(formData),
            likeCommentAction: async (commentId) => {
              const response = await likeCommentHandler(
                `/addNewsCommentLike/${articleId}/${commentId}`,
              );
              errorMessageHandler({
                status: response.status,
                message: { successMessage: response.message },
                callbackFn: async () => {
                  const newCommentData = await updateCommentList(articleId);
                  setCommentData(newCommentData);
                },
              });
            },
            deslikeCommentAction: async (commentId) => {
              const response = await deslikeCommentHadler(
                `/addNewsCommentDislike/${articleId}/${commentId}`,
              );
              errorMessageHandler({
                status: response.status,
                message: { successMessage: response.message },
                callbackFn: async () => {
                  const newCommentData = await updateCommentList(articleId);
                  setCommentData(newCommentData);
                },
              });
            },
            showReplayAction: async (commentId) => {
              setCommentId(commentId);
              const newReplayData = await getReplayData(articleId, commentId);
              setReplayData(newReplayData);
            },
          }}
          flags={{ showActionsSection: false, activedCard: false }}
        />
      )}
    </div>
  );
};

export default NewsCommentSection;
