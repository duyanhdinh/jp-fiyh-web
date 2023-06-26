<script setup lang="ts">
import { computed } from "vue";
import {FULL_PUBLIC_API_HOST, PUBLIC_API_HOST} from "@/constant/endpoint.constant";

interface Props {
  data: any;
}
const props = withDefaults(defineProps<Props>(), {});

const imgUrl = computed<string>(() => {
  if (props.data.uri.startsWith("https://")) {
    return props.data.uri;
  }

  return `${FULL_PUBLIC_API_HOST}images/article/${props.data.uri}`;
});
</script>

<template>
  <div class="my-[12px]">
    <img :src="imgUrl" :alt="data.text" :title="data.text" class="rounded-lg" />
    <div class="text-center italic text-[14px]">{{ data.text }}</div>
  </div>
</template>

<style scoped></style>
