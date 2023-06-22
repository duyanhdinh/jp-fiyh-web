import { FETCH_API_HOST, URI_ITEM } from "@/constant/endpoint.constant";

export const getItemsRecommend = async (
  request?: {
    type?: string;
    limit?: number;
  },
  host: string = ""
) => {
  if (!host) host = FETCH_API_HOST;
  const response = await fetch(host + URI_ITEM.GET_RECOMMEND, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  return response.json();
};
