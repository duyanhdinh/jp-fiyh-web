<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useAdsStore} from "@vue-stores/ads";
import {onMounted, onUnmounted, ref} from "vue";
import type {Ref} from "vue";

interface Props {
  type?: string;
  category?: string;
  slug?: string;
  limit?: number;
}
const props = withDefaults(defineProps<Props>(), {
  limit: 5
});

const adsStore = useAdsStore();
const { itemsAds } = storeToRefs(adsStore);
const slidesRef: Ref<any> = ref(null)
const nextSliceRef: Ref<any> = ref(null)

const autoNextSlice = () => {
  setInterval(() => {
    nextSliceRef.value.click();
  }, 2500);
}

onMounted(() => {
  adsStore.init(props);

  autoNextSlice();
});

onUnmounted(() => {
  adsStore.$dispose();
});
</script>

<template>
  <div
      class="w-full h-auto bg-white px-4 pt-2 pb-6 rounded-xl shadow-2xl select-none leading-loose text-justify"
  >
    <div ref="nextSliceRef" class="invisible absolute" @click="$refs.slidesRef.next()" />
    <div class="font-[16px] font-medium italic mb-[8px]">Recommend for you</div>
    <VSlides
        ref="slidesRef"
        v-if="itemsAds.length"
        class="w-[260px] no-shadow"
        fixedHeight="260px"
        :arrows="false"
        transition-speed="150"
        slide-content-outside="bottom"
        slide-image-inside
        bulletsOutside
    >
      <VSlide
          class="rounded-xl border-[4px] border-double border-[#cd5dca] border-t-[#4180f4] border-l-[#4180f4]"
          v-for="(item, index) in itemsAds"
          :key="index"
          :link="item?.contentData.urlOri"
          :image="item?.contentData.previewUrl"
          openInNew
      >
        <template #content>
          <a
              :href="item.contentData.urlOri"
              target="_blank"
              class="absolute text-[12px] font-medium bottom-[-55px] hyphens-manual line-clamp-2"
              :title="item.name"
          >{{ item.name }}</a>
        </template>
      </VSlide>
    </VSlides>
  </div>
</template>

<style scope>
.vueperslides {
  position: relative;
}

.vueperslides__bullets--outside {
  bottom: -40px;
}

.vueperslide__image {
  background-size: contain;
}

</style>