type IProps = number;
export const formatNumberHandler = (number: IProps): string => {
  const format = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return format;
};
