import { apiWebInfoGetMenu } from "@/api/web-info/menu.api";

export const articlesListHandles = async (
  Astro: any,
  { type = "F0", f1 = null, f2 = null }: any
) => {
  let data = { ...(await apiWebInfoGetMenu()) }.data;
  const parentUriList = Astro.url.pathname;
  const parentUriArticles = `${parentUriList}/`
    .replaceAll("s/", "/")
    .replaceAll("-atc/", "/")
    .slice(0, -1);
  const resource = parentUriArticles.split("/").pop();

  let circles = ["F0"];

  if (!circles.includes(type)) {
    data = checkAcceptRoute(data, f1);
    if (data === null)
      return { data, parentUriList, parentUriArticles, resource };
  }

  circles.push("F1");
  if (!circles.includes(type)) {
    data = checkAcceptRoute(data, f2);
    if (data === null)
      return { data, parentUriList, parentUriArticles, resource };
  }

  return { data, parentUriList, parentUriArticles, resource };
};

const checkAcceptRoute = (data: any, f: string) => {
  let childData = null;

  const dataKey = f.split("-atc")[0];
  Object.keys(data).forEach((key) => {
    if (data[key].key === dataKey) childData = data[key].data;
  });

  return childData;
};
