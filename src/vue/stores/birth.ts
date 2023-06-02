import { defineStore } from "pinia";
import { computed } from "vue";
import { dayNow, monthNow, yearNow } from "@/_content/date-time";
import { geoCity } from "@/_content/geo-city";
import { sortArrByKeyString } from "@/helpers/sort";
import { objToArrSelectObject } from "@/helpers/type";
import { country } from "@/_content/country";
import { useSessionStorage } from "@vueuse/core";
import type { RemovableRef } from "@vueuse/core";
import { BIRTH_STORE } from "@/constant/sessions-key.constant";

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
    "US"
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
  const listCountry = sortArrByKeyString(
    objToArrSelectObject(country),
    "title"
  );
  const listCity = computed<object[]>(() =>
    sortArrByKeyString(geoCity[birthCountry.value], "title")
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
    let city: { lat: any; lng: any } = geoCity[birthCountry.value].find(
      // @ts-ignore
      ({ value }) => value === cityId
    );
    birthLat.value = city.lat;
    birthLng.value = city.lng;
  };

  return {
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
