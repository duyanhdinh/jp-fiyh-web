<script setup lang="ts">
import { HTML_ELEMENT } from "@/constant/html-element";
import VueArticlePartH2 from "@vue-components/pages/article/parts/VueArticlePartH2.vue";
import VueArticlePartImg from "@vue-components/pages/article/parts/VueArticlePartImg.vue";
import VueArticlePartDiv from "@vue-components/pages/article/parts/VueArticlePartDiv.vue";
import VueArticlePartUl from "@vue-components/pages/article/parts/VueArticlePartUl.vue";
import VueArticlePartItalic from "@vue-components/pages/article/parts/VueArticlePartItalic.vue";
import VueArticlePartH3Italic from "@vue-components/pages/article/parts/VueArticlePartH3Italic.vue";
import VueArticlePartStrong from "@vue-components/pages/article/parts/VueArticlePartStrong.vue";

interface Props {
  content: object;
}
const props = withDefaults(defineProps<Props>(), {});

const partComponent = (type) => {
  switch (type) {
    case HTML_ELEMENT.h2:
      return VueArticlePartH2;
    case HTML_ELEMENT.img:
      return VueArticlePartImg;
    case HTML_ELEMENT.ul:
      return VueArticlePartUl;
    case HTML_ELEMENT.italic:
      return VueArticlePartItalic;
    case HTML_ELEMENT.h3_italic:
      return VueArticlePartH3Italic;
    case HTML_ELEMENT.strong:
      return VueArticlePartStrong;
    case HTML_ELEMENT.div:
    default:
      return VueArticlePartDiv;
  }
};
</script>

<template>
  <div
    class="w-full h-auto bg-white px-8 py-8 rounded-xl shadow-2xl select-none leading-loose text-justify"
  >
    <h1 class="font-semibold text-[24px] text-blue-900 mb-[8px]">
      {{ content.title }}
    </h1>
    <template v-for="(part, index) of content.body" :key="index">
      <component :is="partComponent(part.type)" :data="part.data" />
    </template>
  </div>
</template>

<style scoped></style>
