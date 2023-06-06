import { ARTICLE } from "@/constant/endpoint.constant";

export const getArticle = async (request: {
  type: string;
  category: string;
  slug: string;
}) => {
  const response = await fetch(ARTICLE.GET_ARTICLE, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  return response.json();
};
