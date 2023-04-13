<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import Selected from "./common/Selected.vue";
import {year, month, day, hour, min, monthNow, dayNow, yearNow} from '../../content/date-time.ts';
import {country} from '../../content/country';
import {geoCity} from '../../content/geo-city';
import {objToArrSelectObject} from '../../helpers/type';
import {sortArrByKeyString} from "../../helpers/sort";

const birthMonth: Ref<string|number> = ref(monthNow)
const birthDay: Ref<string|number> = ref(dayNow)
const birthYear: Ref<string|number> = ref(yearNow)
const birthHour: Ref<string|number> = ref('')
const birthMin: Ref<string|number> = ref('')
const birthCountry: Ref<string> = ref('US')
const birthCity: Ref<string|number> = ref('')
const birthLat: Ref<string|number|null> = ref(null)
const birthLng: Ref<string|number|null> = ref(null)
const listCountry = sortArrByKeyString(objToArrSelectObject(country), 'title');
const listCity = computed<object[]>(() => sortArrByKeyString(geoCity[birthCountry.value], 'title'));

const resetCityValue = (): void => {
    birthCity.value = '';
    birthLat.value = null;
    birthLng.value = null;
}

const getCountry = (ct: string): void => {
    birthCountry.value = ct;
    resetCityValue();
}

const getBirthGeo = (cityId: number): void => {
    birthCity.value = cityId;
    let city: object = geoCity[birthCountry.value].find(({value}) => value === cityId);
    birthLat.value = city.lat;
    birthLng.value = city.lng;
}

const canSend = computed<boolean>(() =>
    birthMonth.value && birthDay.value && birthYear.value && birthHour.value && birthMin.value
    && birthLat.value !== null && birthLng.value !== null
);

const send = () => {
    if (canSend.value) return;
}
</script>

<template>
    <div>
        <div class="absolute z-20 w-full h-full flex flex-col justify-start items-start space-y-[10px]">
            <div class="w-full h-[27px] flex justify-center text-[20px] font-semibold">{{ $t('date_data_form.title') }}</div>
            <div class="w-full h-[27px] flex justify-center text-[16px] font-semibold">{{ $t('date_data_form.birth_date_time') }}</div>
            <div class="w-full h-auto mx-[16px] flex">
                <Selected class="w-[64px] h-[32px] mr-[15px]"
                          :data="month"
                          :modelValue=birthMonth
                          @update:modelValue="newV => birthMonth = newV"
                />
                <Selected class="w-[64px] h-[32px] mr-[16px]"
                          :data="day"
                          :modelValue=birthDay
                          @update:modelValue="newV => birthDay = newV"
                />
                <Selected class="w-[64px] h-[32px]"
                          :data="year"
                          :modelValue=birthYear
                          @update:modelValue="newV => birthYear = newV"
                />
            </div>
            <div class="w-full h-auto mx-[16px] flex space-x-[15px]">
                <Selected class="w-[102px] h-[32px]"
                          :data="hour"
                          :modelValue=birthHour
                          @update:modelValue="newV => birthHour = newV"
                />
                <div class="flex items-center">{{ $t('date_data_form.min') }}</div>
                <Selected class="w-[64px] h-[32px]"
                          :data="min"
                          :modelValue=birthMin
                          @update:modelValue="newV => birthMin = newV"
                />
            </div>
            <div class="w-full h-[27px] flex justify-center text-[16px] font-semibold">{{ $t('date_data_form.location') }}</div>
            <div class="w-full h-auto px-[16px] flex justify-between">
                <div class="w-auto text-[16px] font-semibold flex items-center">{{ $t('date_data_form.country') }}</div>
                <Selected class="w-[150px] h-[32px]"
                          :data="listCountry"
                          :modelValue=birthCountry
                          @update:modelValue="getCountry"
                />
            </div>
            <div class="w-full h-auto px-[16px] flex justify-between">
                <Selected class="w-full h-[32px]"
                          :data="listCity"
                          :modelValue=birthCity
                          @update:modelValue="getBirthGeo"
                />
            </div>
            <div class="w-full h-auto px-[16px] flex justify-center">
                <div
                        :class="{'cursor-pointer': canSend, 'cursor-not-allowed': !canSend}"
                        class="w-[100px] h-[32px] rounded bg-[#147FE9] text-white font-semibold text-[16px]
                        flex items-center justify-center hover:bg-[#00438a]"
                        @click="send"
                >{{ $t('date_data_form.discover') }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
