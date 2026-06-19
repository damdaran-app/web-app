import { FC, ReactNode } from "react";
import PageStaticItemsController from "./(components)/PageStaticItemsController";
import { Metadata } from "next";

interface IProps {
  aboutProduct: ReactNode;
  userComments: ReactNode;
  // addUserComment: ReactNode;
  params: Promise<{ productId: string }>
}

export const metadata = {
  title: "صفحه توضیحات محصول",
  description: "This is the home page of my site",
};


const ProductDetailLayout: FC<IProps> = ({
  aboutProduct,
  userComments,
  // addUserComment,
  params
}) => {
  return (
    <div>
      <PageStaticItemsController
        router={{
          aboutProduct: aboutProduct,
          userComments: userComments,
          // addUserComment: addUserComment,
        }}
        params={params}
      />
    </div>
  );
};

export default ProductDetailLayout;
