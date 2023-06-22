export const FETCH_API_HOST =
  process.env.FETCH_API_HOST ?? import.meta.env.PUBLIC_API_HOST;
export const PUBLIC_API_HOST = import.meta.env.PUBLIC_API_HOST;

const BASE_API = "/v1/";
const BASE_API_ARTICLE = BASE_API + "article";
const BASE_API_ITEM = BASE_API + "item";
const BASE_API_WEB_INFO = BASE_API + "web-info";

// web data
export const GET_MENU = BASE_API_WEB_INFO + "/menu";
export const GET_GEO_CITY = BASE_API_WEB_INFO + "/geo-city";

// dynamic data
export const DISCOVER_RESULT = BASE_API + "discovery/result";
export const ARTICLE = {
  GET_ARTICLE: BASE_API_ARTICLE,
};
export const URI_ITEM = {
  GET_RECOMMEND: BASE_API_ITEM + "/recommend",
};
