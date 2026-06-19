import { create } from "zustand";
import { ModalStoreType, TNavBarStore } from "../types";
import { INavigation } from "../types/product-detail-page-type";

export const landingSortData = create<TNavBarStore>()((set) => ({
  text: "",
  link: "vealTenderloin",
  changeLink: (value) => set((state) => ({ ...state, link: value })),
}));

// product detail store
export const productDetailNavigationStore = create<INavigation>()((set) => ({
  link: "aboutProduct",
  changeLink: (value) => set({ link: value }),
}));

interface TFilterBoxStatusFlagStore {
  flag: boolean;
  changeFlag: (flagValue: boolean) => void;
}

export const filterBoxStatusFlagStore = create<TFilterBoxStatusFlagStore>()(
  (set) => ({
    flag: false,
    changeFlag: (flagValue: boolean) => set({ flag: flagValue }),
  }),
);

export const ModalStore = create<ModalStoreType>()((set) => ({
  isOpen: false,
  change: (value: boolean) => set({ isOpen: value }),
}));
