<script setup lang="ts">
import DateDataForm from "@vue-components/common/DateDataForm.vue";
</script>

<template>
  <div class="relative">
    <DateDataForm />
    <div
      class="absolute top-[310px] text-[14px] text-center font-normal"
      v-html="$t('site.page_ads.message_html')"
    />
  </div>
</template>

<style scoped></style>
