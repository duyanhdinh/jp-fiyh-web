<script lang="ts" setup>
import { ref, shallowRef } from "vue";
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
import PP from "../icon/properties/PP003.vue";

const component: Ref<{}> & { "[ShallowRefMarker]"?: true } = shallowRef(PP);
const itemName: Ref<string> = ref(
  "Razer BlackShark V2 Pro Wireless Gaming Headset: THX 7.1 Spatial Surround Sound - 50mm Drivers - Detachable Mic - for PC, PS5, PS4, Switch, White"
);
</script>

<template>
  <div class="w-[160px] h-[220px] shadow-xl bg-[#EBEBEB]" :title="itemName">
    <div class="w-full h-[160px] relative">
      <div
        class="w-[160px] h-[160px] bg-white bg-[url('/assets/images/properties/pp_006.png')] bg-cover absolute"
      ></div>
      <div class="w-[32px] h-[32px] flex flex-col absolute right-0">
        <div
          class="w-full h-[32px] bg-[#6BB800] flex justify-center items-center px-[4px]"
        >
          <component
            :is="component"
            class="w-[20px] h-[20px]"
            color="#D1FF80"
          />
        </div>
      </div>
    </div>
    <div class="hyphens-manual line-clamp-2 text-[14px] my-[2px] pl-[4px]">
      {{ itemName }}
    </div>
  </div>
</template>

<style scoped></style>
