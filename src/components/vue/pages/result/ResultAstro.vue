<script lang="ts" setup>
import ResultAstroTotal from "@vue-components/pages/result/ResultAstroTotal.vue";
import ResultAstroDetail from "@vue-components/pages/result/ResultAstroDetail.vue";
interface Props {
  data: object;
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div
    class="mt-[16px] w-full h-auto xl:h-[520px] pb-[16px] xl:pb-0 border border-[#BFBFBF] bg-[#eeeeee] shadow-xl px-[26px]"
  >
    <div
      class="w-full flex flex-wrap justify-center text-[24px] text-black font-semibold mb-[12px]"
    >
      {{ $t("result.astrology.title") }}
    </div>
    <div class="w-full flex flex-col xl:flex-row items-center">
      <ResultAstroTotal :data="data" />
      <ResultAstroDetail :data="data" class="xl:ml-[30px] w-[800px] h-[448px]" />
    </div>
  </div>
</template>

<style scoped></style>
