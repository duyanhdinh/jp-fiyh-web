import { FETCH_API_HOST, GET_GEO_CITY } from "@/constant/endpoint.constant";

export const apiWebInfoGetGeoCity = async (host: string = FETCH_API_HOST) => {
  const response = await fetch(`${host}${GET_GEO_CITY}`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
