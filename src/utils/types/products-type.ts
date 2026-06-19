interface tipsType {
  title: string;
  description: string;
  _id: string;
}

export interface TProductData {
  useInCooking: {
    title: string;
    tips: tipsType[];
  };
  _id: string;
  title: string;
  description: string;
  miniDescription: string;
  price: string;
  imageAddress: string;
  photos: null;
  quality: string;
  xportingCountry: string;
  keyPoints: string[];
  type: string;
  brand: string[];
  isBones: string;
  createAt: string;
  updateAt: string;
  __v: number;
}

export interface GetProductRsponseType {
  data: TProductData[];
  totalCount: number;
}
