import { en } from "@dictionary/en/translation";
import { jp } from "@dictionary/jp/translation";

const trans: any = {
  en,
  jp,
};
export const dictionary = trans[import.meta.env.PUBLIC_LANG];
