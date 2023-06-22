import { FETCH_API_HOST, GET_MENU } from "@/constant/endpoint.constant";

export const apiWebInfoGetMenu = async (host: string = FETCH_API_HOST) => {
  console.log('api: ', `${host}${GET_MENU}`)
  // const response = await fetch(`${host}${GET_MENU}`, {
  //   method: "get",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  // });
  //
  // return response.json();

  return [];
};
