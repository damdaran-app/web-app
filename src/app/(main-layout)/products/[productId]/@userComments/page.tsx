import {
  getUpdatedProductCommentsAction,
  getUpdatedProductCommentsReplayAction,
} from "@/utils/server-actions";
import { getCommentData } from "@/utils/services/api/get/useGetCommentList";
import { FC } from "react";
import CommentSection from "../(components)/CommentSection";

interface IProps {
  params: {
    productId: string;
  };
}

const UserCommentPage: FC<IProps> = async ({ params }) => {
  const { productId } = await params;
  const commentData = await getCommentData(
    `/getAllProductCommentList/${productId}`,
  );

  if (commentData) {
    return (
      <CommentSection
        productId={productId}
        initialCommentData={commentData}
        getUpdatedCommentsAction={getUpdatedProductCommentsAction}
        getUpdatedReplayAction={getUpdatedProductCommentsReplayAction}
      />
    );
  }
};

export default UserCommentPage;
