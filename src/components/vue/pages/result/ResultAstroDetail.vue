<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";
import astroContent from "@/_content/astro.content";

interface Props {
  data: object;
}
const props = withDefaults(defineProps<Props>(), {});

const astrology = props.data.astrology;
const show: Ref<number> = ref(0);
</script>

<template>
  <div class="w-full flex flex-col">
    <div class="w-full flex justify-start">
      <div
        v-for="(item, index) of astroContent.position"
        :key="index"
        :title="item.key"
        class="w-[32px] h-[32px] border border-[#BFBFBF] pt-[3px] text-[15px] font-medium text-center truncate capitalize flex justify-center items-center cursor-pointer"
        :class="[index === show ? 'bg-green-300' : '']"
        @click="show = index"
      >
        <img
          :src="`assets/images/astrology-symbol/${item.key}.png`"
          class="w-[24px] h-[24px]"
        />
      </div>
    </div>
    <div class="relative w-full h-full bg-white border border-[#BFBFBF]">
      <div
        v-for="(item, index) of astroContent.position"
        :key="index"
        class="absolute inset-0 py-[10px] px-[12px] bg-white text-justify text-[17px] overflow-y-auto"
        :class="[index === show ? 'z-20' : 'z-10']"
      >
        <h2 v-if="astrology[item.key]">
          Your {{ item.key }} is:
          <strong class="capitalize">{{ astrology[item.key].position }}</strong>
        </h2>
        {{
          astrology[item.key]
            ? astrology[item.key].detail
            : $t("astrology.message.get_ac")
        }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
