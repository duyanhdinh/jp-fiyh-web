<script lang="ts" setup>
import { computed, inject, onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import Selected from "@vue-components/common/Selected.vue";
import { year, month, day, hour, min } from "@/_content/date-time";
import { useBirthStore } from "@vue-stores/birth";
const birthStore = useBirthStore();
const {
  birthMonth,
  birthDay,
  birthYear,
  birthHour,
  birthMin,
  birthCountry,
  birthCity,
} = storeToRefs(birthStore);
const canSend = computed<boolean>(() => birthStore.isDataFilled);
const hrefResult = computed<string>(() => birthStore.hrefResult);
const i18n: any = inject("i18n");

const send = async (e: any) => {
  if (!canSend.value) e.preventDefault();
};

const monthLocale = computed<object[]>(() =>
  month.map((item) => ({
    ...item,
    title: i18n.month[item.value.toString()].short,
  }))
);

onMounted(() => {
  birthStore.init();
  if (birthCountry.value !== '') birthStore.renderListCountry()
});

onUnmounted(() => {
  birthStore.$dispose();
});
</script>

<template>
  <div>
    <div
      class="absolute z-20 w-full h-full flex flex-col justify-start items-start space-y-[10px]"
    >
      <div
        class="w-full h-[27px] flex justify-center text-[20px] font-semibold"
      >
        {{ $t("date_data_form.title") }}
      </div>
      <div
        class="w-full h-[27px] flex justify-center text-[16px] font-semibold"
      >
        {{ $t("date_data_form.birth_date_time") }}
      </div>
      <div class="w-full h-auto px-[16px] flex justify-between">
        <Selected
          class="w-[64px] h-[32px] mr-[15px]"
          :data="monthLocale"
          :model-value="birthMonth"
          @update:modelValue="(newV) => (birthMonth = newV)"
        />
        <Selected
          class="w-[64px] h-[32px] mr-[16px]"
          :data="day"
          :model-value="birthDay"
          @update:modelValue="(newV) => (birthDay = newV)"
        />
        <Selected
          class="w-[64px] h-[32px]"
          :data="year"
          :model-value="birthYear"
          @update:modelValue="(newV) => (birthYear = newV)"
        />
      </div>
      <div class="w-full h-auto px-[16px] flex space-x-[15px] justify-between">
        <Selected
          class="w-[102px] h-[32px]"
          :data="hour"
          :model-value="birthHour"
          @update:modelValue="(newV) => (birthHour = newV)"
        />
        <div class="flex items-center">
          {{ $t("date_data_form.min") }}
        </div>
        <Selected
          class="w-[64px] h-[32px]"
          :data="min"
          :model-value="birthMin"
          @update:modelValue="(newV) => (birthMin = newV)"
        />
      </div>
      <div
        class="w-full h-[27px] flex justify-center text-[16px] font-semibold"
      >
        {{ $t("date_data_form.location") }}
      </div>
      <div class="w-full h-auto px-[16px] flex justify-between">
        <div class="w-auto text-[16px] font-semibold flex items-center">
          {{ $t("date_data_form.country") }}
        </div>
        <Selected
          class="w-[150px] h-[32px]"
          :data="birthStore.listCountry"
          :model-value="birthCountry"
          @update:modelValue="birthStore.getCountry"
          @click="birthStore.renderListCountry"
        />
      </div>
      <div class="w-full h-auto px-[16px] flex justify-between">
        <Selected
          class="w-full h-[32px]"
          :data="birthStore.listCity"
          :model-value="birthCity"
          @update:modelValue="birthStore.getBirthGeo"
        />
      </div>
      <div class="w-full h-auto px-[16px] flex justify-center">
        <a
          :class="{ 'cursor-pointer': canSend, 'cursor-not-allowed': !canSend }"
          class="w-[100px] h-[32px] rounded bg-[#147AE1] border border-[#00438a] shadow-inner text-white font-semibold text-[16px] flex items-center justify-center hover:bg-[#00438a]"
          :href="hrefResult"
          @click="send"
          title="Fill all input above to discover"
          >{{ $t("date_data_form.discover") }}</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
