import { TFilterBox } from "../types";

// const {data} = useGetFiltersData("getProductPiece", "/getProductPieceLists")

export const productPageInputsData: TFilterBox = [
  {
    labelText: "جستجو",
    placeholder: "",
    itemData: [],
    type: "text",
  },
  {
    labelText: "قطعه یا بخش گوشت",
    placeholder: "",
    itemData: [],
    type: "text",
  },
];
