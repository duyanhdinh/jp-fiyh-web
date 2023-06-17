<script setup lang="ts">
interface Props {
  data: any;
}
const props = withDefaults(defineProps<Props>(), {});

const getTextBold = (item: string) => {
  const arr = item.split(":");
  if (arr.length > 1) return arr[0] + ":";
};

const getTextNormal = (item: string) => {
  const arr = item.split(":");
  if (arr.length > 1) {
    arr.shift();
    return arr.join(":");
  }

  return item;
};
</script>

<template>
  <ul
    class="list-inside pl-[8px] font-semibold"
    :class="{
      'list-disc': data.style === 'disc',
      'list-decimal': data.style === 'decimal',
      italic: data.style === 'decimal',
    }"
  >
    <li v-for="(item, index) of data.list" :key="index">
      {{ getTextBold(item)
      }}<span class="font-normal">{{ getTextNormal(item) }}</span>
    </li>
  </ul>
</template>

<style scoped></style>
