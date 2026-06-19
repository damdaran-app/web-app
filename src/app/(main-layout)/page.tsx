export const dynamic = "force-dynamic";
import { AboutUse, CustomBtn, HerouSection, NewsCard } from "@/components";
import ContactInformationBax from "@/components/ContactInformationBax";
import CustomMap from "@/components/custom-map/CustomMap";
import { samimBold } from "@/components/fonts";
import LandingCommentForm from "@/components/LandingCommentForm";
import LandingProductItem from "@/components/LandingProductItem";
import QuestionsSection from "@/components/QuestionsSection";
import SectionFrequentlyAskedQuestions from "@/components/SectionFrequentlyAskedQuestions";
import { sprateUpratorFn } from "@/utils/hook";
import { getNewsLists, getProductTypeList } from "@/utils/services/api";
import { getLandingReport } from "@/utils/services/api/get/useGetLandingReport";
import {
  getProductList,
  updateProductData,
} from "@/utils/services/api/get/useGetProducts";
import { THerouSectionProductData } from "@/utils/types";
import { TProductsApiParams } from "@/utils/types/products-api-params";
import Link from "next/link";
import herouImage1 from "../../assets/photos/herou-image1.jpg";
import { getCoords } from "@/utils/services/api/get/getCoords";

interface TProps {
  searchParams: TProductsApiParams;
}

export const metadata = {
  title: "صفحه اصلی | دامداران",
  description: "This is the home page of my site",
};

const HomePage = async ({ searchParams }: TProps) => {
  const reportData = await getLandingReport("/getLandingReport");
  const newsData = await getNewsLists("/getNewsLists", {
    TypeId: null,
    RowsOfPage: "4",
  });

  const herouSeactionData: THerouSectionProductData[] = sprateUpratorFn(
    reportData?.data?.aboutProducts?.products,
    "image",
    herouImage1.src,
  );

  const productTypeDataList = await getProductTypeList("/getProductTypeLists");
  const productDataList = await getProductList(
    "/getProductLists",
    searchParams,
  );

  console.log("landing reportData ==>", reportData)

  const coordsResponse = await getCoords("https://maps.app.goo.gl/TWg3bJPvCsDovpYx9")
  console.log("coordsResponse ==>", coordsResponse)

  return (
    <div className="holder flex flex-col items-center">
      <HerouSection
        holderWidth={95}
        title={reportData.data.aboutProducts.title}
        description={reportData.data.aboutProducts.descrption}
        productData={herouSeactionData}
      />
      <AboutUse
        title={reportData.data.singleQuestion.question}
        description={reportData.data.singleQuestion.answerToTheQuestion}
      />
      <LandingProductItem
        productTypeData={productTypeDataList}
        productDataList={productDataList}
        updateProductList={updateProductData}
      />
      <div className="qustion-item-container my-8">
        <QuestionsSection
          title={reportData.data.ourPositivePoints.title}
          questionData={reportData.data.ourPositivePoints.tips}
        />
      </div>
      <SectionFrequentlyAskedQuestions
        title={reportData.data.aboutMeAndMyWork.aboutMe.title}
        description={reportData.data.aboutMeAndMyWork.aboutMe.description}
        brand={reportData.data.aboutMeAndMyWork.myWork.authenticBrand}
        organicMeat={reportData.data.aboutMeAndMyWork.myWork.OrganicMeat}
        yearsOfActivity={
          reportData.data.aboutMeAndMyWork.myWork.yearsOfActivity
        }
        questionsData={reportData.data.frequentlyAskedQuestions}
      />
      <div
        className="cantact-use-holder w-full flex flex-col items-center mt-24"
        id="landingContactUsSection"
      >
        <h1
          className={`${samimBold.className} text-3xl max-lg:text-center max-md:text-2xl`}
        >
          با ما در ارتباط باشید
        </h1>
        <h2 className="text-gray mt-3.5 max-lg:text-center">
          مجموعه‌ای از بهترین و پرفروش‌ترین قطعات گوشت وارداتی با کیفیت جهانی؛
          آماده سفارش فوری با یک تماس.
        </h2>
        <div className="cantact-use-container w-[95%] max-xl:w-full mt-9 flex max-lg:flex-col justify-between max-lg:items-center">
          <div className="right w-[56%] max-lg:w-[90%] max-lg:text-center">
            <div className="top">
              <ContactInformationBax />
            </div>
            <div className="bottom rounded-2xl overflow-hidden mt-7">
              {coordsResponse.lat && coordsResponse.lng ? <CustomMap
                center={[coordsResponse.lat, coordsResponse.lng]}
                className="h-[340px] w-full"
              /> : <></>}
            </div>
          </div>
          <div className="left w-[40%] max-lg:w-[90%] max-lg:mt-8">
            <LandingCommentForm />
          </div>
        </div>
        <div className="mt-16 w-[95%] m-auto">
          <div className="top flex justify-between items-center">
            <p className={`${samimBold.className} text-2xl`}>مقالات</p>
            <Link href={"/articles"}>
              <CustomBtn
                text="مشاهده همه"
                className="bg-dark text-white cursor-pointer"
              />
            </Link>
          </div>
          <div className="bottom news-card-control w-full flex flex-wrap justify-between max-lg:justify-center max-lg:gap-8 mt-4 max-md:mt-6">
            {newsData?.map((item, index) => {
              return (
                <NewsCard
                  key={index}
                  id={item._id}
                  date={item.createAt}
                  description={item.description}
                  image={""}
                  time={item.studyTime}
                  title={item.title}
                  label={item.titleCategories}
                  containerHeight="350px"
                  views="1"
                  aosAnimation="zoom-in"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
