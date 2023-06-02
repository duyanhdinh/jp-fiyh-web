<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAdsStore } from "@vue-stores/ads";
import { onMounted, onUnmounted, ref } from "vue";
import type { Ref } from "vue";

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
const slidesRef: Ref<any> = ref(null);
const nextSliceRef: Ref<any> = ref(null);

const autoNextSlice = () => {
  setInterval(() => {
    if (itemsAds.value.length) {
      nextSliceRef.value.click();
    }
  }, 2500);
};

onMounted(() => {
  adsStore.init(props);

  autoNextSlice();
});

onUnmounted(() => {
  adsStore.$dispose();
});
</script>

<template>
  <div>
    <div
      ref="nextSliceRef"
      class="invisible absolute"
      @click="$refs.slidesRef.next()"
    />
    <div class="font-[16px] font-medium italic mb-[8px]">
      {{ $t("site.recommend_ads.title") }}
    </div>
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
            >{{ item.name }}</a
          >
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
