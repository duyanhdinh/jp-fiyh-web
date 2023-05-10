<script lang="ts" setup>
import { inject } from "vue";

const i18n = inject("i18n");

const name: String = i18n.site.name;
</script>

<template>
  <div class="w-full h-[80px] flex items-center">
    <a
      href="/"
      class="w-[60px] h-[60px] rounded-lg bg-gradient-to-r from-[#CD5DCA] to-[#4180F4] cursor-pointer"
    >
      <img src="/assets/images/logo/logo_64x64.png" :alt="name" />
    </a>
    <div
      class="ml-[60px] text-[28px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#4180F4] to-[#CD5DCA]"
    >
      {{ name }}
    </div>
  </div>
</template>

<style scoped></style>
