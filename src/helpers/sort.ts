export const sortArrByKeyString = (
  arr: any,
  key: string,
  reverse: 1 | -1 = 1
) =>
  arr.sort((a: any, b: any): number => {
    const nameA = a[key].toUpperCase(); // ignore upper and lowercase
    const nameB = b[key].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -reverse;
    }
    if (nameA > nameB) {
      return reverse;
    }

    // names must be equal
    return 0;
  });
