<script setup lang="ts">
interface Props {
  data: any;
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <h3 class="italic font-semibold text-[16px]">{{ data }}</h3>
</template>

<style scoped></style>
