import { defineStore } from "pinia";
import { computed } from "vue";
import { dayNow, monthNow, yearNow } from "@/_content/date-time";
import { geoCity } from "@/_content/geo-city";
import { sortArrByKeyString } from "@/helpers/sort";
import { objToArrSelectObject } from "@/helpers/type";
import { country } from "@/_content/country";
import { useSessionStorage } from "@vueuse/core";
import type { RemovableRef } from "@vueuse/core";

export const useBirthStore = defineStore("birth", () => {
  const birthMonth: RemovableRef<string | number> = useSessionStorage(
    "birthMonth",
    monthNow
  );
  const birthDay: RemovableRef<string | number> = useSessionStorage(
    "birthDay",
    dayNow
  );
  const birthYear: RemovableRef<string | number> = useSessionStorage(
    "birthYear",
    yearNow
  );
  const birthHour: RemovableRef<string | number> = useSessionStorage(
    "birthHour",
    ""
  );
  const birthMin: RemovableRef<string | number> = useSessionStorage(
    "birthMin",
    ""
  );
  const birthCountry: RemovableRef<string> = useSessionStorage(
    "birthCountry",
    "US"
  );
  const birthCity: RemovableRef<string | number> = useSessionStorage(
    "birthCity",
    ""
  );
  const birthLat: RemovableRef<string | number | null> = useSessionStorage(
    "birthLat",
    null
  );
  const birthLng: RemovableRef<string | number | null> = useSessionStorage(
    "birthLng",
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
      birthMonth.value &&
      birthDay.value &&
      birthYear.value &&
      birthHour.value !== "" &&
      birthMin.value !== "" &&
      birthLat.value !== null &&
      birthLng.value !== null
  );

  const hrefResult = computed<string>(
    () =>
      `result?y=${birthYear.value}&m=${birthMonth.value}&d=${birthDay.value}&h=${birthHour.value}&min=${birthMin.value}&co=${birthCountry.value}&ci=${birthCity.value}&lat=${birthLat.value}&lng=${birthLng.value}`
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
    let city: object = geoCity[birthCountry.value].find(
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
