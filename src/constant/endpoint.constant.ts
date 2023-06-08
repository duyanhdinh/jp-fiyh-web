export const FETCH_API_HOST = import.meta.env.FETCH_API_HOST;
export const PUBLIC_API_HOST = import.meta.env.MAIN_HOST + "/api";

const BASE_API = "/v1/";
const BASE_API_ARTICLE = BASE_API + "article";
const BASE_API_ITEM = BASE_API + "item";

// web data
export const GET_MENU = BASE_API + "web-info/menu";

// dynamic data
export const DISCOVER_RESULT = BASE_API + "discovery/result";
export const ARTICLE = {
  GET_ARTICLE: BASE_API_ARTICLE,
};
export const URI_ITEM = {
  GET_RECOMMEND: BASE_API_ITEM + "/recommend",
};
