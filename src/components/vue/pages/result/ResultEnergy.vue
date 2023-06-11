<script lang="ts" setup>
import { computed } from "vue";
import ResultEnergyMonth from "@vue-components/pages/result/ResultEnergyMonth.vue";

interface Props {
  energy: object;
}
const props = withDefaults(defineProps<Props>(), {});
const month = computed<object>(() => props.energy?.month ?? null);
</script>

<template>
  <div
    class="mt-[16px] w-full h-auto xl:h-[1180px] pb-[16px] xl:pb-0 border border-[#BFBFBF] bg-[#eeeeee] shadow-xl px-[26px] space-y-[16px]"
  >
    <div
      class="w-full flex flex-wrap justify-center text-[24px] text-black font-semibold mb-[12px]"
    >
      {{ $t("result.energy.title") }}
    </div>
    <ResultEnergyMonth
      v-for="(item, key, index) of month"
      :key="key"
      :data="item"
      :next="index"
      :imgLeft="!!(index % 2)"
    />
  </div>
</template>

<style scoped></style>
