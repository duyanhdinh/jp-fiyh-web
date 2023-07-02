import {countryEn} from "@/_content/en/country.en";
import {countryJp} from "@/_content/jp/country.jp";

const trans: any = {
  en: countryEn,
  jp: countryJp,
};
export const country = trans[import.meta.env.PUBLIC_LANG];