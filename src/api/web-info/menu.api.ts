import { FETCH_API_HOST, GET_MENU } from "@/constant/endpoint.constant";
import { log } from "astro/dist/core/logger/core";

export const apiWebInfoGetMenu = async (host: string = "") => {
  if (host) host = FETCH_API_HOST;

  return fetch(`${host}${GET_MENU}`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((e) => console.log("error: ", e));
};
