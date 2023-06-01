<script setup lang="ts">
interface Props {
  data: any;
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div class="my-[12px]">
    <img
      :src="`/assets/images/test/${data.uri}`"
      :alt="data.text"
      :title="data.text"
      class="rounded-lg"
    />
    <div class="text-center italic text-[14px]">{{ data.text }}</div>
  </div>
</template>

<style scoped></style>
