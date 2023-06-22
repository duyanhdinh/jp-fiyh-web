import { DISCOVER_RESULT, FETCH_API_HOST } from "@/constant/endpoint.constant";

export const apiDiscoverGetResult = async (request: any, host: string = "") => {
  if (!host) host = FETCH_API_HOST;
  const response = await fetch(host + DISCOVER_RESULT, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  const { data } = await response.json();

  return data;
};
