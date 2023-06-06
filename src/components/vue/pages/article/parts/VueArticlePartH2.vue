<script setup lang="ts">
interface Props {
  data: any;
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <h2 class="font-semibold text-[18px]">{{ data }}</h2>
</template>

<style scoped></style>
