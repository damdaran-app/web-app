import { ReactNode } from "react";

export interface TComment {
  labels: {
    titleLabel: string;
    descriptionLabel: string;
  };
  placeholder: {
    titleInput: string;
    descriptionInput: string;
  };
  initialValues?: {
    title: string;
    description: string;
  };
  containerWidth: number;
  submitAction?: (formData: FormData) => void;
}

export interface TCommentData {
  id?: string;
  image: string;
  userName: string;
  date: string;
  title: string;
  describe: string;
  likeNum: string;
  deslikeNum: string;
}

export interface TReplayData {
  _id: string;
  userPic: string;
  userName: string;
  productId: string;
  commentId: string;
  title: string;
  description: string;
  likeCount: string;
  desLikeCount: string;
  createAt: string;
}

export interface TCommentCard {
  id?: string;
  image: string;
  userName: string;
  date: string;
  title: string;
  describe: string;
  likeNum: string;
  deslikeNum: string;
  containerWidth: number;
  childrenComp?: {
    replayFormComp?: ReactNode;
    showReplayComp?: ReactNode;
  };
  actions?: {
    likeAction?: () => void;
    deslikeAction?: () => void;
    showReplayAction?: () => void;
  };
  flags: {
    showActionsSection: boolean;
    activedCard: boolean;
  };
}

export interface TAddCommentResponse {
  // message: "successfully" | "error" | ""
  message: string;
  status: number;
}
