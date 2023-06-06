import { ref } from "vue";
import type { Ref } from "vue";
import { defineStore } from "pinia";
import { useBirthStore } from "./birth";
import * as http from "@vue-plugins/api.plugin";
import { useSessionStorage } from "@vueuse/core";
import type { RemovableRef } from "@vueuse/core";

export const useResultStore = defineStore("result", () => {
  const birth = useBirthStore();
  // const score: RemovableRef<object> = useSessionStorage('scoreFate', {});
  const score: Ref<object | null> = ref(null);
  const astrology: RemovableRef<object> = useSessionStorage(
    "astrologyFate",
    {}
  );
  const energy: RemovableRef<object> = useSessionStorage("energyFate", {});
  const dataReady: Ref = ref(false);

  const apiDiscoverGetResult = async (request: any) =>
    http
      .getDiscoverResult({
        year: 2022,
        month: request.get("m"),
        day: request.get("d"),
        lat: request.get("lat"),
        lng: request.get("lng"),
        hour: request.get("h"),
        min: request.get("min"),
        co: request.get("co"),
      })
      .then(({ data }) => data);

  return {
    apiDiscoverGetResult,
    score,
    astrology,
    energy,
    dataReady,
  };
});
