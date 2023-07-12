import { apiWebInfoGetMenu } from "@/api/web-info/menu.api";
import type { Entries } from "@/type/object";

export const articlesListHandles = async (Astro: any) => {
  let data = { ...(await apiWebInfoGetMenu()) }.data;
  let resource = "article";
  const from = Astro.url.pathname;
  let paths = from.slice(1).split("/");
  paths.shift();

  let path = paths.shift();
  while (path) {
    if (!path.startsWith("list-")) return undefined;

    path = path.replace(/list-/, "");
    for (const [key, value] of Object.entries(data) as Entries<any>) {
      if (value.slug === path) {
        data = value.child;
        break;
      }
    }

    if (data === undefined) return data;

    resource = path.replaceAll("-", "_");

    path = paths.shift();
  }

  return { data, resource, from };
};

const checkAcceptRoute = (data: any, f: string) => {
  let childData = null;

  const dataKey = f.split("-atc")[0];
  Object.keys(data).forEach((key) => {
    if (data[key].key === dataKey) childData = data[key].data;
  });

  return childData;
};
