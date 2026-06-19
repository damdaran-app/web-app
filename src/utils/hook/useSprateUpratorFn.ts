export const sprateUpratorFn = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataMap: any[],
  key: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  newDataAppend: any,
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dataArray: any[] = [];
  dataMap.forEach((item) => {
    const newData = { ...item, [key]: newDataAppend };
    dataArray.push(newData);
  });
  return dataArray;
};
