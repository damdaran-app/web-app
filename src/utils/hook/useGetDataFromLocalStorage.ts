export const useGetDataFromLocalStorage = (
  key: string,
  isParser: "false" | "true",
) => {
  let value;
  if (typeof window != "undefined") {
    if (isParser == "true") {
      value = localStorage.getItem(key) ?? "";
      if (value && value != "") value = JSON.parse(value);
    } else {
      value = localStorage.getItem(key) ?? "";
    }
  }
  return value;
};
