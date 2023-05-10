import { DISCOVER_RESULT } from "@/constant/endpoint.constant";

export const getResult = async (request) => {
  const response = await fetch(DISCOVER_RESULT, {
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
