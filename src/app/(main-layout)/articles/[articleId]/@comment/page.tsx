import { NewsCommentSection } from "@/components";
import { getCommentData, getNewsReplayData, updateNewsCommentDataList } from "@/utils/services/api/get/useGetCommentList";
import { FC } from "react";

interface TProps {
  params: {
    articleId: string;
  };
}

const CommentPage: FC<TProps> = async ({ params }) => {
  const { articleId } = await params;
  const commentData = await getCommentData(`/getNewsCommentList/${articleId}`);
  return (
    <>
      <NewsCommentSection
        articleId={articleId}
        initialCommentData={commentData}
        updateCommentList={updateNewsCommentDataList}
        getReplayData={getNewsReplayData}
      />
    </>
  );
};

export default CommentPage;
