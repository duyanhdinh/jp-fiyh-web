<script setup lang="ts">
import { keyToPosition } from "@helpers/tarot.helper";

interface Props {
  data: any;
}
const props = withDefaults(defineProps<Props>(), {});

const getHref = (data: any, index: any) => {
  let href = "";
  data.forEach((item: string, itemIndex: any) => {
    if (itemIndex <= index) {
      if (itemIndex) {
        href += `/list-${item.replaceAll("_", "-")}`;
      } else {
        href += `/${item}s`;
      }
    }
  });

  return href;
};
</script>

<template>
  <div
    class="flex w-full font-bold text-[14px] lg:text-[18px] my-[6px] bg-clip-text text-transparent bg-gradient-to-r from-[#4180F4] to-[#CD5DCA]"
  >
    <div
      v-for="(item, index) in data"
      :key="index"
      class="mr-[4px] flex capitalize items-center"
    >
      <a :href="getHref(data, index)" class="flex">
        {{
          $t(`common.${item}`) ??
          $t(`properties.${item}`) ??
          $t(`astrology.position.${item}`) ??
          $t(`astrology.sign.${item}`) ??
          $t(`tarot.major_arcana.${keyToPosition(item)}`)
        }}
        <div v-if="index !== data.length - 1" class="mx-[4px]">></div>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
