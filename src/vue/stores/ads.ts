import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import type { RemovableRef } from "@vueuse/core";
import { HTTP_STATUS_CODE } from "@/constant/http.constant";
import { ADS_STORE } from "@/constant/sessions-key.constant";
import { getItemsRecommend } from "@/api/item/index.api";
import type { Ref } from "vue";
import { ref } from "vue";

export const useAdsStore = defineStore("ads", () => {
  const itemsAdsLocal: RemovableRef<object[]> = useLocalStorage(
    ADS_STORE.ITEMS,
    [],
    { mergeDefaults: true }
  );
  const itemsAds: Ref<object[]> = ref([]);

  const init = async (request?: {
    category?: string;
    slug?: string;
    limit?: number;
  }) => {
    const response = await getItemsRecommend(request);

    if (
      parseInt(response.statusCode) === HTTP_STATUS_CODE.SUCCESS &&
      response.data.length
    ) {
      itemsAds.value = response.data;
      localStorage.setItem(ADS_STORE.ITEMS, JSON.stringify(response.data));
    } else {
      itemsAds.value = itemsAdsLocal.value;
    }
  };

  return {
    init,
    itemsAds,
  };
});
