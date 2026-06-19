import { CustomBtn, StepNavigationComp } from "@/components";
import CustomCard from "@/components/CustomCard";
import { samimBold } from "@/components/fonts";
import QuestionCard from "@/components/QuestionCard";
import TabNavigateComp from "@/components/TabNavigateComp";
import { optionsData } from "@/utils/constant";
import { changeMomentHandler, changeTimeHandler } from "@/utils/hook";
import {
  getLandingReport,
  getMyInformation,
  getSimilarProduct,
  getSingleProduct,
} from "@/utils/services/api";
import Link from "next/link";
import { FC, ReactNode } from "react";
import CallingCard from "./CallingCard";
import DynamicComponentController from "./DynamicComponentController";
import InfoCard from "./InfoCard";

interface IProps {
  router: {
    aboutProduct: ReactNode;
    userComments: ReactNode;
  };
  params?: Promise<{ productId: string }>;
}

const PageStaticItemsController: FC<IProps> = async ({ router, params }) => {
  const newParams = await params;
  const response = await getSingleProduct(
    `/getSingleProduct/${newParams?.productId}`,
  );
  const similarResponse = await getSimilarProduct(
    `/getSimilarPeoducts/${newParams?.productId}`,
  );
  const landingReport = await getLandingReport("/getLandingReport");
  const sellerInformationData = await getMyInformation("/getSellerInformation");
  return (
    <>
      <div className="top w-[90%] m-auto mt-8">
        <StepNavigationComp
          data={[
            { text: "صفحه اصلی", link: "/" },
            { text: "محصولات", link: "/products" }
          ]}
        />
      </div>
      <div className="product-detail-page-holder w-full flex items-center justify-center mt-12">
        <div className="items-control w-[90%]">
          <div className="herou-section-control w-full flex gap-3 max-lg:flex-col">
            <div className="right bg-white p-4 rounded-2xl w-[70%] max-lg:w-full">
              {response && (
                <InfoCard
                  imageAddress={response.data.imageAddress}
                  title={response.data.title}
                  quality={response.data.quality}
                  qountry={response.data.xportingCountry}
                  productType={response.data.type}
                  isBones={response.data.isBones}
                  brands={response.data.brand}
                />
              )}
            </div>
            <div className="left w-[30%] h-full max-lg:w-full">
              {landingReport && response ? (
                <CallingCard
                  time={changeTimeHandler(response?.data.createAt ?? "")}
                  desc={landingReport?.data.aboutMeAndMyWork.aboutMe.title}
                  date={changeMomentHandler(response?.data.createAt ?? "")}
                  image=""
                  title={
                    landingReport?.data.aboutMeAndMyWork.aboutMe.companyName
                  }
                  // phoneNumber={sellerInformationData.data.phoneNumber[0]}
                  phoneNumber={"09112800689"}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="children-control my-10">
            <div className="nav-tab-control mr-5">
              <TabNavigateComp
                data={[
                  { text: "درباره محصول", link: "aboutProduct" },
                  { text: "نظرات کاربران", link: "userComments" },
                ]}
              />
            </div>
            <div className="item-holder p-5 bg-white rounded-2xl">
              <DynamicComponentController
                aboutProduct={router.aboutProduct}
                userComments={router.userComments}
                // addUserComment={router.addUserComment}
              />
            </div>
          </div>
          <div className="options-item-control flex flex-wrap flex-row-reverse justify-center gap-8">
            {optionsData.map((item, index) => (
              <QuestionCard
                key={index}
                image={item.pic}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="product-item-control mt-28">
            <div className="top w-full flex justify-between">
              <CustomBtn
                text="محصولات مرتبط"
                className={`${samimBold.className} text-xl`}
              />
              <Link href={"/products"}>
                <CustomBtn
                  text="همه محصولات"
                  className="bg-dark text-white cursor-pointer"
                />
              </Link>
            </div>
            <div className="bottom flex gap-3 flex-wrap justify-start mt-6">
              {similarResponse?.data.map((item, index) => (
                <CustomCard
                  key={index}
                  image={item.imageAddress}
                  productId={item._id}
                  title={item.title}
                  rating={Number(item.quality)}
                  view={1}
                  description={item.description}
                  countryName={item.xportingCountry}
                  link={`/products/${item._id}`}
                  dataAos=""
                  className="mr-3.5"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageStaticItemsController;
