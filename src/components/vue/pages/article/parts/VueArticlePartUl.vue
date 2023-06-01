<script setup lang="ts">
interface Props {
  data: any;
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <ul
    class="list-inside pl-[8px]"
    :class="{
      'list-disc': data.style === 'disc',
      'list-decimal': data.style === 'decimal',
      italic: data.style === 'decimal',
    }"
  >
    <li v-for="(item, index) of data.list" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<style scoped></style>
