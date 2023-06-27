export const FETCH_API_HOST =
  process.env.FETCH_API_HOST ?? import.meta.env.PUBLIC_API_HOST;
export const PUBLIC_API_HOST = import.meta.env.PUBLIC_API_HOST;
const BASE_API_VER = "/v1/";
export const FULL_PUBLIC_API_HOST = PUBLIC_API_HOST + BASE_API_VER;

const BASE_API_ARTICLE = BASE_API_VER + "article";
const BASE_API_ITEM = BASE_API_VER + "item";
const BASE_API_WEB_INFO = BASE_API_VER + "web-info";

// web data
export const GET_MENU = BASE_API_WEB_INFO + "/menu";
export const GET_GEO_CITY = BASE_API_WEB_INFO + "/geo-city";

// dynamic data
export const DISCOVER_RESULT = BASE_API_VER + "discovery/result";
export const ARTICLE = {
  GET_ARTICLE: BASE_API_ARTICLE,
};
export const URI_ITEM = {
  GET_RECOMMEND: BASE_API_ITEM + "/recommend",
};
