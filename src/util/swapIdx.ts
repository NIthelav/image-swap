export const swapIdx = <T>(idx1: number, idx2: number, arr: T[]): T[] => {
  const returnArr = [...arr];
  returnArr[idx1] = arr[idx2];
  returnArr[idx2] = arr[idx1];
  return returnArr;
};
