<script setup lang="ts">
import properties from "@/_content/properties";
import { getDateCircle } from "@helpers/date.helper";
import { computed } from "vue";

interface Props {
  score: any;
}
const props = withDefaults(defineProps<Props>(), {});
const month = computed<object>(() => props?.score?.month ?? null);

const getClassesScore = (score: number) => {
  if (score <= 20) {
    return ["bg-red-500"];
  } else if (score <= 40) {
    return ["bg-orange-500"];
  } else if (score <= 60) {
    return ["bg-yellow-500"];
  } else if (score <= 80) {
    return ["bg-lime-500"];
  }

  return ["bg-green-500"];
};
</script>

<template>
  <div class="hidden xl:flex justify-center flex-wrap">
    <div class="w-auto flex bg-white">
      <div class="w-[150px] h-[32px] border border-[#BFBFBF]"></div>
      <div
        v-for="(item, index) of properties"
        :key="index"
        :data="item"
        :title="$t(`properties.${item.key}`)"
        class="w-[80px] h-[32px] border border-[#BFBFBF] pt-[3px] text-[15px] font-medium text-center truncate capitalize"
        :class="[`text-[${item.color.dark}]`]"
      >
        {{ $t(`properties.${item.key}`) }}
      </div>
    </div>
    <div
      v-for="(monthValue, monthKey, monthIndex) of month"
      :key="monthKey"
      class="w-auto flex bg-white"
    >
      <div
        class="w-[150px] h-[32px] border border-[#BFBFBF] text-center pt-[3px] text-[14px]"
      >
        {{ getDateCircle(monthIndex) }}
      </div>
      <div
        v-for="(item, index) of properties"
        :key="index"
        :data="item"
        :title="item.name"
        class="w-[80px] h-[32px] border border-[#BFBFBF] pt-[3px] text-[14px] font-medium text-center truncate capitalize"
        :class="getClassesScore(monthValue[`p${item.key}`])"
      >
        {{ monthValue[`p${item.key}`] }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
