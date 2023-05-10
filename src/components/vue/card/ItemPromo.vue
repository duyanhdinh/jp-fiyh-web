<script lang="ts" setup>
import { ref } from "vue";
import type { Ref, ComponentPublicInstance } from "vue";
import PP001 from "../icon/properties/PP001.vue";
import PP002 from "../icon/properties/PP002.vue";
import PP003 from "../icon/properties/PP003.vue";
import PP004 from "../icon/properties/PP004.vue";
import PP005 from "../icon/properties/PP005.vue";
import PP006 from "../icon/properties/PP006.vue";
import PP007 from "../icon/properties/PP007.vue";
import PP008 from "../icon/properties/PP008.vue";
import PP009 from "../icon/properties/PP009.vue";
import PP010 from "../icon/properties/PP010.vue";
import PP011 from "../icon/properties/PP011.vue";
import PP012 from "../icon/properties/PP012.vue";
import PP from "../icon/properties/PP011.vue";

const component: Ref<ComponentPublicInstance> = ref(PP);
const itemName: Ref<string> = ref(
  "Razer BlackShark V2 Pro Wireless Gaming Headset: THX 7.1 Spatial Surround Sound - 50mm Drivers - Detachable Mic - for PC, PS5, PS4, Switch, White"
);
</script>

<template>
  <div class="w-[184px] h-[184px] shadow-lg bg-[#EBEBEB]" :title="itemName">
    <div class="w-full h-[132px] flex">
      <div
        class="w-[132px] h-[132px] bg-white bg-[url('/assets/images/properties/pp_006.png')] bg-cover"
      ></div>
      <div class="w-[52px] h-[132px] flex flex-col">
        <div
          class="w-full h-[22px] bg-gradient-to-l from-[#0000FF] to-[#000040] flex justify-between items-center px-[4px]"
        >
          <PP001 class="w-[16px] h-[16px]" color="#4D4DFF" />
          <div class="text-white text-[12px]">+2.5</div>
        </div>
        <div
          class="w-full h-[22px] bg-gradient-to-l from-[#FFE6F2] to-[#FF7FC2] flex justify-between items-center px-[4px]"
        >
          <component
            :is="component"
            class="w-[16px] h-[16px]"
            color="#FFE6FF"
          />
          <div class="text-black text-[12px]">+2.5</div>
        </div>
      </div>
    </div>
    <div class="hyphens-manual line-clamp-2 text-[14px] my-[2px] pl-[4px]">
      {{ itemName }}
    </div>
  </div>
</template>

<style scoped></style>
