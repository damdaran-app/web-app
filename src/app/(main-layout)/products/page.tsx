import { ProductListSectionComp, StepNavigationComp } from "@/components";
import { getFiltersDataHandler, getProductServeFn } from "@/utils/services/api";
import { FC } from "react";

export interface TProductPageSearchParams {
  searchParams: Promise<{
    PageNumber: string;
    RowsOfPage: string;
    Query: string;
    ProductTypeId: string;
    ProductQuality: string;
    LssuingCountryId: string;
    minPrice: string;
    maxPrice: string;
  }>;
}

export const metadata = {
  title: "صفحه محصولات",
  description: "This is the product page of my site",
};

const ProductPage: FC<TProductPageSearchParams> = async ({ searchParams }) => {
  const {
    PageNumber,
    RowsOfPage,
    Query,
    LssuingCountryId,
    ProductQuality,
    ProductTypeId,
    maxPrice,
    minPrice,
  } = await searchParams;
  const response = await getProductServeFn("/getProductLists", {
    PageNumber,
    RowsOfPage,
    Query,
    LssuingCountryId,
    ProductQuality,
    ProductTypeId,
    maxPrice,
    minPrice,
  });

  const productPieceData = await getFiltersDataHandler("/getProductPieceLists");
  const producteEportingCountryData = await getFiltersDataHandler(
    "/getAllExportingCountry",
  );
  const productTypesData = await getFiltersDataHandler("/getProductTypeLists");

  return (
    <div className="product-list-container w-full flex justify-center mt-5">
      <div className="product-list-control w-[95%]">
        <div className="top m-auto pr-6">
          <StepNavigationComp data={[{ text: "صفحه اصلی", link: "/" }]} />
        </div>
        <div className="bottom-secction mt-10">
          <ProductListSectionComp
            data={response}
            RowsOfPage={Number(RowsOfPage)}
            filterData={{
              productPieceData,
              producteEportingCountryData,
              productTypesData,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
