"use client";
import CommentWrapper from "@/components/comment-components/CommentWrapper";
import { errorMessageHandler } from "@/utils/hook";
import {
  addProductCommentAction,
  addProductCommentReplayAction,
} from "@/utils/server-actions";
import {
  deslikeCommentHadler,
  likeCommentHandler
} from "@/utils/services/api";
import { TAddCommentResponse, TCommentData } from "@/utils/types/comment-type";
import { useRouter } from "next/navigation";
import {
  FC,
  startTransition,
  useActionState,
  useEffect,
  useState,
} from "react";

interface IProps {
  productId: string;
  getUpdatedCommentsAction: (productId: string) => Promise<{
    data: TCommentData[];
    totalCount: number;
  }>;
  getUpdatedReplayAction: (
    productId: string,
    commentId: string,
  ) => Promise<{
    data: TCommentData[];
    totalCount: number;
  }>;
  initialCommentData: {
    data: TCommentData[];
    totalCount: number;
  };
}

const CommentSection: FC<IProps> = ({
  productId,
  initialCommentData,
  getUpdatedCommentsAction,
  getUpdatedReplayAction,
}) => {
  const router = useRouter();
  const [commentId, setCommentId] = useState<string>("");
  const [commentData, setCommentData] = useState<{
    data: TCommentData[];
    totalCount: number;
  }>({
    data: initialCommentData?.data,
    totalCount: initialCommentData?.totalCount,
  });
  const [replayInitialState, setReplayInitialState] = useState<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[];
    totalCount: number;
  }>();

  const [addCommentInitialState] = useState<TAddCommentResponse>({
    status: 0,
    message: "",
  });
  const [addCammentState, action] = useActionState(
    addProductCommentAction,
    addCommentInitialState,
  );

  const [addReplayInitialState] = useState<TAddCommentResponse>({
    status: 0,
    message: "",
  });
  const [addReplayState, replayAction] = useActionState(
    addProductCommentReplayAction,
    addReplayInitialState,
  );

  const setHiddenParam = (key: string, value: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);

    router.replace(url.pathname + url.search, { scroll: false });
  };

  useEffect(() => {
    errorMessageHandler({
      status: addCammentState.status,
      message: { successMessage: "نظر شما با موفقیت ثبت شد" },
      callbackFn: async () => {
        const newData = await getUpdatedCommentsAction(productId);
        if (newData) {
          setCommentData(newData);
        }
      },
    });

    errorMessageHandler({
      status: addReplayState.status,
      message: { successMessage: "نظر شما با موفقیت ثبت شد" },
      callbackFn: async () => {
        const newData = await getUpdatedReplayAction(productId, commentId)
        setCommentData(newData)
      },
    });
  }, [addCammentState, addReplayState, commentId, productId, getUpdatedCommentsAction, getUpdatedReplayAction]);

  return (
    <>
      {commentData && (
        <CommentWrapper
          totalComment={commentData?.totalCount?.toString()}
          containerWidth={100}
          labels={{
            titleLabel: "عنوان دیدگاه",
            descriptionLabel: "متن دیدگاه",
          }}
          placeholder={{
            titleInput: "عنوان دیدگاه خود را بنویسید",
            descriptionInput: "متن دیدگاه خود را بنویسید",
          }}
          initialValues={{ title: "", description: "" }}
          replayFormInitialValues={{ title: "", description: "" }}
          dataKey={{
            commentId: "_id",
            productId: "productId",
            userName: "userName",
            title: "title",
            date: "createAt",
            describe: "description",
            deslikeNum: "desLikeCount",
            likeNum: "likeCount",
            userPic: "userPic",
          }}
          commentData={commentData?.data}
          replayData={replayInitialState?.data ?? []}
          actions={{
            addCommentAction: (formData) => {
              formData.append("productId", productId);
              startTransition(() => action(formData));
            },
            addReplayCommentAction: (formData) => {
              setHiddenParam(
                "commentId",
                formData.get("commentId")?.toString() ?? "",
              );
              formData.append("productId", productId);
              startTransition(() => replayAction(formData));
            },
            likeCommentAction: async (id) => {
              const response = await likeCommentHandler(
                `/likeComment/${productId}/${id}`,
              );
              errorMessageHandler({
                status: response.status,
                message: {
                  successMessage: response.message,
                },
                callbackFn: async () => {
                  const newData = await getUpdatedCommentsAction(productId);
                  if (newData) {
                    setCommentData(newData);
                  }
                },
              });
            },
            deslikeCommentAction: async (id) => {
              const response = await deslikeCommentHadler(
                `/deslikeComment/${productId}/${id}`,
              );
              errorMessageHandler({
                status: response.status,
                message: {
                  successMessage: response.message,
                },
                callbackFn: async () => {
                  const newData = await getUpdatedCommentsAction(productId);
                  if (newData) {
                    setCommentData(newData);
                  }
                },
              });
            },
            showReplayAction: async (commentId) => {
              setHiddenParam("commentId", commentId);
              setCommentId(commentId);
              const newData = await getUpdatedReplayAction(
                productId,
                commentId,
              );
              setReplayInitialState(newData);
            },
          }}
          flags={{ showActionsSection: false, activedCard: false }}
        />
      )}
    </>
  );
};

export default CommentSection;
