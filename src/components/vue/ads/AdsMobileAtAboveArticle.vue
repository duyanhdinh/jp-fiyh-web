<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import type {Ref} from "vue";
import {useAdsStore} from "@vue-stores/ads";
import {storeToRefs} from "pinia";
import XMark from "@vue-components/icon/common/XMark.vue";

interface Props {
  category?: string;
  slug?: string;
  limit?: number;
}
const props = withDefaults(defineProps<Props>(), {
  limit: 5,
});

const adsStore = useAdsStore();
const { itemsAds } = storeToRefs(adsStore);
const item = computed(() => itemsAds.value.length ? itemsAds.value[Math.floor(Math.random() * itemsAds.value.length)] : {})
const isShowing: Ref<boolean> = ref(true)

onMounted(() => {
  adsStore.init(props);
});
</script>

<template>
  <div v-show="isShowing" class="relative w-full h-[240px] px-[20px] mb-[16px]">
    <div class="absolute top-0 right-[20px] w-[16px] h-[16px] z-20 bg-[#072d73]">
      <XMark
          color="#dddddd"
          class="mt-[-4px]"
          @click="isShowing = false"
      />
    </div>
    <div class="w-full h-full text-justify text-white bg-gradient-to-r from-[#6d2269] to-[#072d73]">
      <a
          :href="item?.contentData?.url"
          target="_blank"
          class="w-full h-full"
      ><div class="w-full h-full relative">
        <img
            :src="item?.contentData?.previewUrl"
            :alt="item?.name"
            :title="item?.name"
            class="absolute w-full h-[240px] top-0 object-contain"
        />
        <div class="absolute w-full bottom-0 bg-gradient-to-r from-[#6d2269] to-[#072d73] text-center hyphens-manual line-clamp-2">{{ item?.name }}</div>
      </div></a>
    </div>

  </div>
</template>

<style scoped>

</style>