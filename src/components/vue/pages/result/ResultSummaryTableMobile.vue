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
  <div class="xl:hidden h-auto flex justify-center">
    <div class="w-[340px] h-auto">
      <div class="w-full bg-white flex text-[15px]">
        <div
            class="w-[100px] h-auto border border-[#BFBFBF] pl-[4px] pt-[3px] font-medium text-start capitalize"
        ></div>
        <div
            class="w-[80px] h-auto border border-[#BFBFBF] pt-[3px] text-[14px] font-medium justify-center capitalize flex items-center"
        >{{ getDateCircle(0) }}</div>
        <div
            class="w-[80px] h-auto border border-[#BFBFBF] pt-[3px] text-[14px] font-medium justify-center capitalize flex items-center"
        >{{ getDateCircle(1) }}</div>
        <div
            class="w-[80px] h-auto border border-[#BFBFBF] pt-[3px] text-[14px] font-medium justify-center capitalize flex items-center"
        >{{ getDateCircle(2) }}</div>

      </div>
      <div
          v-for="(item, index) of properties"
          :key="index"
          class="w-full bg-white flex text-[15px]"
      >
        <div
            class="w-[100px] min-h-[32px] border border-[#BFBFBF] pl-[4px] pt-[3px] font-medium text-start capitalize"
            :class="[`text-[${item.color.dark}]`]"
            :title="item.name"
        >{{ item.name }}</div>
        <div
            class="w-[80px] min-h-[32px] border border-[#BFBFBF] pt-[3px] text-[14px] font-medium justify-center capitalize flex items-center"
            :class="getClassesScore(month.n0[`p${item.key}`])"
        >{{ month.n0[`p${item.key}`] }}</div>
        <div
            class="w-[80px] min-h-[32px] border border-[#BFBFBF] pt-[3px] text-[14px] font-medium justify-center capitalize flex items-center"
            :class="getClassesScore(month.n1[`p${item.key}`])"
        >{{ month.n1[`p${item.key}`] }}</div>
        <div
            class="w-[80px] min-h-[32px] border border-[#BFBFBF] pt-[3px] text-[14px] font-medium justify-center capitalize flex items-center"
            :class="getClassesScore(month.n2[`p${item.key}`])"
        >{{ month.n2[`p${item.key}`] }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
