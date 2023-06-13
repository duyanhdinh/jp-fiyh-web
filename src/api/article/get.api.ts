import { ARTICLE, FETCH_API_HOST } from "@/constant/endpoint.constant";

export const getArticle = async (
  slug: string,
  host: string = FETCH_API_HOST
) => {
  const response = await fetch(host + ARTICLE.GET_ARTICLE, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ slug }),
  });

  return response.json();
};
