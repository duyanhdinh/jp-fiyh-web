import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Ref } from "vue";
import { dayNow, monthNow, yearNow } from "@/_content/date-time";
import { sortArrByKeyString } from "@/helpers/sort";
import { objToArrSelectObject } from "@/helpers/type";
import { useSessionStorage } from "@vueuse/core";
import type { RemovableRef } from "@vueuse/core";
import { BIRTH_STORE } from "@/constant/sessions-key.constant";
import { PUBLIC_API_HOST } from "@/constant/endpoint.constant";
import { apiWebInfoGetGeoCity } from "@/api/web-info/geo-city.api";
import { HTTP_STATUS_CODE } from "@/constant/http.constant";
import { country } from "@/_content/country";

export const useBirthStore = defineStore("birth", () => {
  const birthMonth: RemovableRef<string | number> = useSessionStorage(
    BIRTH_STORE.MONTH,
    monthNow
  );
  const birthDay: RemovableRef<string | number> = useSessionStorage(
    BIRTH_STORE.DAY,
    dayNow
  );
  const birthYear: RemovableRef<string | number> = useSessionStorage(
    BIRTH_STORE.YEAR,
    yearNow
  );
  const birthHour: RemovableRef<string | number> = useSessionStorage(
    BIRTH_STORE.HOUR,
    ""
  );
  const birthMin: RemovableRef<string | number> = useSessionStorage(
    BIRTH_STORE.MIN,
    ""
  );
  const birthCountry: RemovableRef<string> = useSessionStorage(
    BIRTH_STORE.CO,
    "VI"
  );
  const birthCity: RemovableRef<string | number> = useSessionStorage(
    BIRTH_STORE.CITY,
    ""
  );
  const birthLat: RemovableRef<string | number | null> = useSessionStorage(
    BIRTH_STORE.LAT,
    null
  );
  const birthLng: RemovableRef<string | number | null> = useSessionStorage(
    BIRTH_STORE.LNG,
    null
  );
  const geoCity: Ref<any> = ref(null);

  const init = async () => {
    const response = await apiWebInfoGetGeoCity(PUBLIC_API_HOST);

    if (parseInt(response.statusCode) === HTTP_STATUS_CODE.SUCCESS) {
      geoCity.value = JSON.parse(response.data);
    }
  };
  const listCountry = sortArrByKeyString(
    objToArrSelectObject(country),
    "title"
  );
  const listCity = computed<object[]>(() =>
    geoCity.value
      ? sortArrByKeyString(geoCity.value[birthCountry.value], "title")
      : []
  );
  const isDataFilled = computed<boolean>(
    () =>
      !!(
        birthMonth.value &&
        birthDay.value &&
        birthYear.value &&
        birthHour.value !== "" &&
        birthMin.value !== "" &&
        birthLat.value !== null &&
        birthLng.value !== null
      )
  );

  const hrefResult = computed<string>(
    () =>
      `/result?y=${birthYear.value}&m=${birthMonth.value}&d=${birthDay.value}&h=${birthHour.value}&min=${birthMin.value}&co=${birthCountry.value}&ci=${birthCity.value}&lat=${birthLat.value}&lng=${birthLng.value}`
  );

  const resetCityValue = (): void => {
    birthCity.value = "";
    birthLat.value = null;
    birthLng.value = null;
  };

  const getCountry = (ct: string): void => {
    birthCountry.value = ct;
    resetCityValue();
  };

  const getBirthGeo = (cityId: number): void => {
    birthCity.value = cityId;
    let city: { lat: any; lng: any } = geoCity.value[birthCountry.value].find(
      // @ts-ignore
      ({ value }) => value === cityId
    );
    birthLat.value = city.lat;
    birthLng.value = city.lng;
  };

  return {
    init,
    birthMonth,
    birthDay,
    birthYear,
    birthHour,
    birthMin,
    birthCountry,
    birthCity,
    birthLat,
    birthLng,
    listCountry,
    listCity,
    isDataFilled,
    resetCityValue,
    getCountry,
    getBirthGeo,
    hrefResult,
  };
});
