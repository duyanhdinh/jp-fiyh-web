<script lang="ts" setup>
import astroContent from "@/_content/astro.content";
interface Props {
  data: object;
}
const props = withDefaults(defineProps<Props>(), {});

const astrology = props.data.astrology;
</script>

<template>
  <div class="w-[280px] flex mb-[16px] xl:mb-0">
    <div class="w-[140px] flex flex-col bg-white">
      <div
        class="w-full h-[32px] border border-[#BFBFBF] pt-[3px] text-[15px] font-medium text-center truncate capitalize"
      >
        {{ $t("result.astrology.name") }}
      </div>
      <div
        v-for="(item, index) of astroContent.position"
        :key="index"
        :title="$t(`astrology.position.${item.key}`)"
        class="w-full h-[32px] border border-[#BFBFBF] pt-[3px] text-[15px] font-medium text-center truncate capitalize flex justify-start items-center px-[6px]"
      >
        <img
          :src="`assets/images/astrology-symbol/${item.key}.png`"
          class="mr-[6px] h-[24px]"
        />
        <div class="truncate">{{ $t(`astrology.position.${item.key}`) }}</div>
      </div>
    </div>
    <div class="w-[140px] flex flex-col bg-white">
      <div
        class="w-full h-[32px] border border-[#BFBFBF] pt-[3px] text-[15px] font-medium text-center truncate capitalize"
      >
        {{ $t("result.astrology.sign") }}
      </div>
      <div
        v-for="(item, index) of astroContent.position"
        :key="index"
        :title="
          astrology[item.key]
            ? $t(`astrology.sign.${astrology[item.key].position}`)
            : ''
        "
        class="w-full h-[32px] border border-[#BFBFBF] pt-[3px] text-[15px] font-medium text-center truncate capitalize flex justify-start items-center px-[6px]"
      >
        <img
          v-if="astrology[item.key]"
          :src="`assets/images/astrology-symbol/${
            astrology[item.key].position
          }.png`"
          class="mr-[6px] h-[24px]"
        />
        <div class="truncate">
          {{
            astrology[item.key]
              ? $t(`astrology.sign.${astrology[item.key].position}`)
              : ""
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
