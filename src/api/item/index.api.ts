import { URI_ITEM } from "@/constant/endpoint.constant";

export const getItemsRecommend = async (request?: {
  type?: string;
  limit?: number;
}) => {
  const response = await fetch(URI_ITEM.GET_RECOMMEND, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  return response.json();
};
