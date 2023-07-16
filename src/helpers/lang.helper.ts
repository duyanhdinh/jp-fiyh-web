import { dictionary } from "@dictionary/index";
import { keyToPosition } from "@helpers/tarot.helper";

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

        let t = keyToPosition(title);
        if (t !== undefined && Object.keys(item).includes(t)) {
          return item[t];
        }

        return null;
      })
      .filter((item) => item)[0] ?? title
  );
};
