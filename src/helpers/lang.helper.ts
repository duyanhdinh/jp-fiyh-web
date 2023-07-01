import { dictionary } from "@dictionary/index";

export const tranTitle = (title: string) => {
  const arr = [
    dictionary.common,
    dictionary.properties,
    dictionary.astrology.position,
    dictionary.astrology.sign,
    dictionary.tarot.major_arcana,
  ];

  return (
    arr
      .map((item) => {
        if (Object.keys(item).includes(title)) {
          return item[title];
        }

        return null;
      })
      .filter((item) => item)[0] ?? title
  );
};
