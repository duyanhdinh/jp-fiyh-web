<script setup lang="ts">
import ArrowDown from "@vue-components/icon/common/ArrowDown.vue";
import { inject } from "vue";
import UsFlag from "@vue-components/icon/flags/UsFlag.vue";
import JpFlag from "@vue-components/icon/flags/JpFlag.vue";

const i18n: any = inject("i18n");
</script>

<template>
  <VMenu :distance="6" :triggers="['hover', 'focus']">
    <div
      class="flex items-center lg:text-[18px] text-[16px] uppercase font-semibold"
    >
      <UsFlag v-if="i18n.language === 'en'" class="w-[20px] h-[20px] mr-1" />
      <JpFlag v-else class="w-[20px] h-[20px] mr-1" />
      {{ i18n.language === "en" ? i18n.locales.en : i18n.locales.ja }}
      <ArrowDown class="lg:w-[14px] lg:h-[14px] w-[12px] h-[12px] ml-[4px]" />
    </div>
    <template #popper>
      <div class="px-[12px] py-[6px]">
        <div class="w-[200px] italic font-normal hyphens-manual line-clamp-2">
          {{ i18n.header.menu.locales.title }}:
        </div>
        <a
          href="https://fateinyourhands.com/"
          target="_blank"
          class="flex justify-start items-center hover:bg-[#4180f4] uppercase"
        >
          <UsFlag class="w-[20px] h-[20px] mr-1" />
          {{ i18n.locales.en }}
        </a>
        <a
          href="https://jp.fateinyourhands.com/"
          target="_blank"
          class="flex justify-start items-center hover:bg-[#4180f4] uppercase"
        >
          <JpFlag class="w-[20px] h-[20px] mr-1" />
          {{ i18n.locales.ja }}
        </a>
      </div>
    </template>
  </VMenu>
</template>

<style scoped></style>
