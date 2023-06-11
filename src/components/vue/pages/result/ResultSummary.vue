<script lang="ts" setup>
import ResultSummaryTable from "@vue-components/pages/result/ResultSummaryTable.vue";
import ResultSummaryTableMobile from "@vue-components/pages/result/ResultSummaryTableMobile.vue";

interface Props {
  score: object;
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div
    class="mt-[16px] w-full h-auto xl:h-[240px] pb-[16px] xl:pb-0 border border-[#BFBFBF] bg-[#eeeeee] shadow-xl"
  >
    <div
      class="w-full flex flex-wrap justify-center text-[24px] text-black font-semibold"
    >
      {{ $t("result.summary.title") }}
    </div>
    <div
      class="w-full flex flex-wrap justify-center text-[18px] text-black my-[12px]"
    >
      {{ $t("result.summary.scroll_explain") }}
    </div>
    <div class="w-full justify-center">
      <ResultSummaryTable :score="props.score" />
      <ResultSummaryTableMobile :score="props.score" />
    </div>
  </div>
</template>

<style scoped></style>
