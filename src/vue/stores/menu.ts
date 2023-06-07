import { defineStore } from "pinia";
import { useSessionStorage } from "@vueuse/core";
import type { RemovableRef } from "@vueuse/core";
import { HTTP_STATUS_CODE } from "@/constant/http.constant";
import { MENU_STORE } from "@/constant/sessions-key.constant";
import { apiWebInfoGetMenu } from "@/api/web-info/menu.api";
import { PUBLIC_API_HOST } from "@/constant/endpoint.constant";

export const useMenuStore = defineStore("menu", () => {
  const articlesMenu: RemovableRef<object> = useSessionStorage(
    MENU_STORE.ARTICLES,
    {}
  );

  const init = async () => {
    const response = await apiWebInfoGetMenu(PUBLIC_API_HOST);

    if (parseInt(response.statusCode) === HTTP_STATUS_CODE.SUCCESS) {
      articlesMenu.value = response.data;
    }
  };

  return {
    init,
    articlesMenu,
  };
});
