import {FETCH_API_HOST, GET_MENU} from "@/constant/endpoint.constant";

export const apiWebInfoGetMenu = async (host: string = FETCH_API_HOST) => {
  console.log('vite', import.meta.env)
  console.log('fetch', FETCH_API_HOST)
  console.log('process', process.env)
  console.log('api', `${host}${GET_MENU}`)
  return await fetch(`${host}${GET_MENU}`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
      .then((response) => response.json())
      .catch(e => console.log('error: ', e));
};
