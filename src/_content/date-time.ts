import type { SelectObject } from "../type/select-object";

export const day: SelectObject[] = [
  { value: 1, title: "01" },
  { value: 2, title: "02" },
  { value: 3, title: "03" },
  { value: 4, title: "04" },
  { value: 5, title: "05" },
  { value: 6, title: "06" },
  { value: 7, title: "07" },
  { value: 8, title: "08" },
  { value: 9, title: "09" },
  { value: 10, title: "10" },
  { value: 11, title: "11" },
  { value: 12, title: "12" },
  { value: 13, title: "13" },
  { value: 14, title: "14" },
  { value: 15, title: "15" },
  { value: 16, title: "16" },
  { value: 17, title: "17" },
  { value: 18, title: "18" },
  { value: 19, title: "19" },
  { value: 20, title: "20" },
  { value: 21, title: "21" },
  { value: 22, title: "22" },
  { value: 23, title: "23" },
  { value: 24, title: "24" },
  { value: 25, title: "25" },
  { value: 26, title: "26" },
  { value: 27, title: "27" },
  { value: 28, title: "28" },
  { value: 29, title: "29" },
  { value: 30, title: "30" },
  { value: 31, title: "31" },
];

export const month: SelectObject[] = [
  { value: 1, title: "Jan" },
  { value: 2, title: "Feb" },
  { value: 3, title: "Mar" },
  { value: 4, title: "Apr" },
  { value: 5, title: "May" },
  { value: 6, title: "Jun" },
  { value: 7, title: "Jul" },
  { value: 8, title: "Aug" },
  { value: 9, title: "Sep" },
  { value: 10, title: "Oct" },
  { value: 11, title: "Nov" },
  { value: 12, title: "Dec" },
];

const yearGenerator = (): SelectObject[] => {
  let year: SelectObject[] = [];
  let minYear: Number = 1900;
  let maxYear: Number = 2050;

  for (let i: any = minYear; i <= maxYear; i++) {
    year.push({ value: i, title: i.toString() });
  }

  return year;
};

export const year: SelectObject[] = yearGenerator();

const hourGenerator = (): SelectObject[] => {
  let hour: SelectObject[] = [{ value: "u", title: "???" }];
  let minHour: Number = 0;
  let maxHour: Number = 23;

  for (let i: any = minHour; i <= maxHour; i++) {
    hour.push({
      value: i,
      title:
        i < 12 ? `${i} (a.m.)` : i > 12 ? `${i} (${i - 12} p.m.)` : `${i} (12 p.m.)`,
    });
  }

  return hour;
};

export const hour: SelectObject[] = hourGenerator();

const minGenerator = (): SelectObject[] => {
  let min: SelectObject[] = [{ value: "u", title: "???" }];
  for (let i: number = 0; i <= 59; i++) {
    min.push({
      value: i,
      title: i.toString(),
    });
  }

  return min;
};

export const min: SelectObject[] = minGenerator();

const dateNow: Date = new Date();
export const monthNow: number = dateNow.getUTCMonth() + 1;
export const dayNow: number = dateNow.getUTCDate();
export const yearNow: number = dateNow.getUTCFullYear();
