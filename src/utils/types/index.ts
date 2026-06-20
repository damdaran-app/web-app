// global types
export interface TProviderApp {
  children: ReactNode;
}

// icon props
export interface TIcon extends ComponentPropsWithoutRef<"svg"> {
  size: number;
  color?: string;
}

// landing types
import { ChangeEvent, ComponentPropsWithoutRef, ReactNode } from "react";
import { TFilteringSort } from "./api-responses-types";

export interface TNavBarData {
  text: string;
  link: string;
}

export interface TNavBar extends ComponentPropsWithoutRef<"div"> {
  data: TNavBarData[];
  pathName: string;
  isLink: boolean;
  clickFlag: boolean;
  click?: (value: string) => void;
}

export interface TNavBarStore {
  text: string;
  link: string;
  changeLink: (value: string) => void;
}

export interface TSearchIcon {
  size: number;
}

export interface TCustomBtn extends ComponentPropsWithoutRef<"button"> {
  pendingFlag?: boolean;
  text: string;
  pendingText?: string;
  children?: ReactNode;
}

export interface TImageHerouBox extends ComponentPropsWithoutRef<"div"> {
  title: string;
  description: string;
  image: string;
  aosAnimation?: string;
}

export interface THerouSectionProductData {
  title: string;
  description: string;
  aosAnimation?: string;
  image: string;
}

export interface THerouSection {
  holderWidth: number;
  title: string;
  description: string;
  productData: THerouSectionProductData[];
}

export interface TAboutUse {
  title: string;
  description: string;
}

export interface TCustomCard extends ComponentPropsWithoutRef<"div"> {
  view: 1 | 2;
  image: string;
  rating: number;
  countryName: string;
  title: string;
  description: string;
  productId: string;
  dataAos: string;
  link: string;
}

export interface TProducts {
  id: number;
  image: string;
  rating: number;
  countryName: string;
  title: string;
  description: string;
}

export interface TQuestionsSection {
  image?: string;
  title: string;
  questionData?: [{ tipsTitle: string; tipsDescription: string }];
}

export interface TQuestionsSectionCard {
  image?: string;
  title: string;
  description: string;
  index?: number;
}

export interface GetDataResponse<T> {
  success: boolean;
  message: string;
  data?: T
}

export interface TLandingReport {
  // data: {
    headingText?: {
      startTitle: string;
      clicheTitle: string;
      endTitle: string;
      description: string;
    };
    aboutProducts?: {
      title: string;
      descrption: string;
      products: [{ title: string; description: string }];
    };
    singleQuestion?: {
      question: string;
      answerToTheQuestion: string;
    };
    ourPositivePoints?: {
      title: string;
      tips: [{ tipsTitle: string; tipsDescription: string }];
    };
    aboutMeAndMyWork?: {
      aboutMe: {
        title: string;
        companyName: string;
        description: string;
      };
      myWork: {
        yearsOfActivity: string;
        OrganicMeat: string;
        authenticBrand: string;
      };
    };
    frequentlyAskedQuestions?: [
      { question: string; answerToTheQuestion: string },
    ];
  // };
}

export interface TSectionFrequentlyAskedQuestions {
  brand: string;
  organicMeat: string;
  yearsOfActivity: string;
  title: string;
  description: string;
  questionsData: [{ question: string; answerToTheQuestion: string }];
}

export interface TCustomAccordion {
  title: string;
  description: string;
  index: number;
}

export interface TContainer {
  children: ReactNode;
}

export interface TMyInformation {
  data: {
    _id: string;
    address: string;
    homePhone: string;
    phoneNumber: string[];
  };
}

export interface ICustomInputEvent {
  rangeNum: number[];
  name: string;
  selectOption: {
    name: string;
    value: string;
  };
  target?:
    | ChangeEvent<HTMLInputElement>
    | HTMLSelectElement
    | EventTarget
    | HTMLInputElement;
  search: string;
  date: string;
}

export type InputTypes = "text" | "range" | "select" | "date";
export interface ICustomInput extends Omit<
  ComponentPropsWithoutRef<"div">,
  "onChange"
> {
  type: InputTypes;
  placeholder?: string;
  labelText?: string;
  name?: string;
  bgColor?: string;
  urlValue?: string;
  parentWidth?: number;
  // itemData: string[];
  itemData: TFilteringSort[];
  rangeMinValue?: number;
  rangeMaxValue?: number;
  rangeSteper?: number;
  rangeDefaultValue?: number[];
  onChange?: (event: ICustomInputEvent) => void;
  dataAos?: string;
}

export type TFilterBox = ICustomInput[];

export interface IRangeInput {
  rangeMinValue?: number;
  rangeMaxValue?: number;
  rangeSteper?: number;
  rangeDefaultValue?: number[];
  onChange?: (event: number | number[]) => void;
}

export interface TCoomentAboutUse {
  fullName: string | FormDataEntryValue | null;
  email: string | FormDataEntryValue | null;
  message: string | FormDataEntryValue | null;
}

export interface ModalStoreType {
  isOpen: boolean;
  change: (value: boolean) => void
}