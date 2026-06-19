// product types
export interface TypeDataType {
  _id: string;
  name: string;
  __v: number;
}

export interface TFilteringSort {
  _id: string;
  name: string;
  __v: number;
}

export interface ProductTypeResponseType {
  message: string;
  data: TypeDataType[];
}

// news types

interface TipsType {
  title: string;
  description: string;
  _id: string;
}

interface ImageType {
  _id: string;
  src: string;
}

export interface TNews {
  newsItems: null;
  _id: string;
  title: string;
  image: ImageType[];
  useInCooking: {
    title: string;
    tips: TipsType[];
  };
  keyPoints: string[];
  googleTitle: string;
  description: string;
  createAt: string;
  updateAt: string;
  studyTime: string;
  categoriesList: string[];
  titleCategories: string;
  rating: string;
  likeCount: string;
  dislikeCount: string;
  __v: number;
}

export interface TNewsResponse {
  message: string;
  data: TNews[];
  totalCount: number;
}

export interface TNewsComment {
  _id: string;
  userPic: string;
  userName: string;
  newsId: string;
  title: string;
  description: string;
  likeCount: string;
  desLikeCount: string;
  createAt: string;
  __v: number;
}

interface TAuthReportData {
  videoSrc: string;
  title: string;
  description: string;
}

export interface TAuthReport {
  data: {
    signUp: TAuthReportData;
    signIn: TAuthReportData;
    _id: string;
    __v: number;
  };
}

export interface TAuthrization {
  message: "error" | "successfully" | "";
}

export interface TSignInResponse {
  message: "error" | "successfully" | "";
  token: string;
}

export interface TAddNewsRate {
  message: string;
}
