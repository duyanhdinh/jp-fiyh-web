import { GET_MENU } from "@/constant/endpoint.constant";

export const apiWebInfoGetMenu = async () => {
  const response = await fetch(GET_MENU, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
