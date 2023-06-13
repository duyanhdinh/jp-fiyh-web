<script setup lang="ts">
import Plus from "@vue-components/icon/common/Plus.vue";
import Minus from "@vue-components/icon/common/Minus.vue";
import type { Ref } from "vue";
import { ref } from "vue";
import ArticleListVueLoop from "@vue-components/pages/articles/ArticleListVueLoop.vue";

interface Props {
  data: object;
  from: string;
  item: object;
}
const props = withDefaults(defineProps<Props>(), {});

const isShowChild: Ref<boolean> = ref(false);

const getHrefMenu = (item: any) => `${props.from}/list-${item.slug}`;
</script>

<template>
  <div class="font-semibold underline bg-orange-300 pl-[4px] pr-[8px]">
    <a :href="getHrefMenu(item)" class="cursor-pointer">{{ item.title }}</a>
    <div class="float-right w-[20px] h-[20px] cursor-pointer">
      <Plus v-show="!isShowChild" @click="isShowChild = true" />
      <Minus v-show="isShowChild" @click="isShowChild = false" />
    </div>
  </div>
  <div v-show="isShowChild">
    <ArticleListVueLoop :data="item.child" :from="getHrefMenu(item)" />
  </div>
</template>

<style scoped></style>
