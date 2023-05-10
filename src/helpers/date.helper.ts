import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

const CIRCLE_TIME: number = 3942000000;

export const getLocaleDateString = (
  date: Date,
  options: DateTimeFormatOptions = {}
): string =>
  date.toLocaleDateString("en-US", {
    weekday: "long",
    era: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "shortOffset",
    ...options,
  });

export const dateMMDDYYYY = (date: Date, slash = "/"): string =>
  `${
    date.getMonth() + 1
  }${slash}${date.getDate()}${slash}${date.getFullYear()}`;

export const dateFormatStringEn = (
  date: Date,
  options: DateTimeFormatOptions
): string =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "shortOffset",
    ...options,
  });

export const getDateCircle = (
  nextCircle: number = 0,
  slash: string = "-"
): string => {
  const startTime: number = new Date(new Date().getFullYear(), 0, 1).getTime();
  const currentTime: number = new Date().getTime();
  const currentCircle: number = Math.floor(
    (currentTime - startTime) / CIRCLE_TIME
  );

  const sum: number = currentCircle + nextCircle;
  const mod8: number = sum % 8;
  const div8: number = Math.floor(sum / 8);
  switch (mod8) {
    case 0:
      return (
        dateMMDDYYYY(new Date(new Date().getFullYear() + div8, 0, 1)) +
        ` ${slash} ` +
        dateMMDDYYYY(new Date(startTime + (sum + 1) * CIRCLE_TIME))
      );
    case 7:
      return (
        dateMMDDYYYY(new Date(startTime + sum * CIRCLE_TIME)) +
        ` ${slash} ` +
        dateMMDDYYYY(new Date(new Date().getFullYear() + div8, 11, 31))
      );
    default:
      return (
        dateMMDDYYYY(new Date(startTime + sum * CIRCLE_TIME)) +
        ` ${slash} ` +
        dateMMDDYYYY(new Date(startTime + (sum + 1) * CIRCLE_TIME))
      );
  }
};
