<script lang="ts" setup>
import { getDateCircle } from "@helpers/date.helper";

interface Props {
  data: object;
  imgLeft: boolean;
  next: number;
}
const props = withDefaults(defineProps<Props>(), {
  imgLeft: false,
  next: 0,
});
</script>

<template>
  <div
    class="w-full h-[360px] flex justify-between"
    :class="[imgLeft ? 'flex-row-reverse' : '']"
  >
    <div
      class="w-[800px] h-full py-[10px] px-[12px] bg-white border border-[#BFBFBF] text-justify text-[17px] overflow-y-auto"
    >
      <h2
        class="mb-[6px]"
        v-html="
          $t('result.energy.h2_title_raw', {
            date: getDateCircle(props.next, 'to'),
            energy: data.energy,
            energy_name: data.name,
          })
        "
      />
      {{ data.detail }}
    </div>
    <div
      class="w-[280px] h-full bg-cover bg-center border border-[#BFBFBF]"
      :style="{
        'background-image': `url('assets/images/tarot/22-energies/${data.energy}.jpg')`,
      }"
    />
  </div>
</template>

<style scoped></style>
