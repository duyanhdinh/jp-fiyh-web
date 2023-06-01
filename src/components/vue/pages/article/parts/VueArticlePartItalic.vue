<script setup lang="ts">
interface Props {
  data: any;
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div class="italic">{{ data }}</div>
</template>

<style scoped></style>
