<script lang="ts" setup>
import { computed, ref, onMounted } from "vue";
import type { Ref } from "vue";

interface Props {
  data: object;
  defaultNull?: boolean;
  modelValue?: string | number;
}
const props = withDefaults(defineProps<Props>(), {
  defaultNull: false,
});
const emit = defineEmits(["update:modelValue"]);

const load: Ref<boolean> = ref(true);
const value = computed<number | string | null | undefined>({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

onMounted(() => {
  load.value = false;
});
</script>

<template>
  <select
    v-model="value"
    class="rounded border border-black pl-1 pr-4 cursor-pointer"
    aria-label="label for the select"
  >
    <option v-if="load" value=""></option>
    <option v-for="(item, index) of data" :key="index" :value="item.value">
      {{ item.title }}
    </option>
  </select>
</template>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
}
</style>
