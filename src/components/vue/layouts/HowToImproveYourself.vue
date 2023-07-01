<script setup></script>

<template>
  <div class="py-[10px] px-[20px] text-[16px]">
    <h2
      class="w-full flex justify-center font-semibold text-[18px] italic mb-[10px]"
    >
      {{ $t("banner.right.title") }}
    </h2>
    <div v-html="$t('banner.right.content')" />
  </div>
</template>

<style scoped></style>
