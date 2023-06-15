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

const getHrefMenu = (item: any) =>
  item.slug ? `${props.from}/list-${item.slug}` : props.from;

const getDataLoop = (item: any) => item.child ?? item.sub;
</script>

<template>
  <div
    class="font-semibold pl-[4px] pr-[8px] flex justify-between"
    :class="[item.child ? 'bg-orange-300' : '']"
  >
    <a
      v-if="item.slug"
      :href="getHrefMenu(item)"
      class="cursor-pointer underline"
      >{{ item.title }}</a
    >
    <div v-else>{{ item.title }}</div>

    <div v-if="item.child" class="w-[20px] h-[20px] cursor-pointer">
      <Plus v-show="!isShowChild" @click="isShowChild = true" />
      <Minus v-show="isShowChild" @click="isShowChild = false" />
    </div>
  </div>
  <div v-show="isShowChild || item.sub">
    <ArticleListVueLoop :data="getDataLoop(item)" :from="getHrefMenu(item)" />
  </div>
</template>

<style scoped></style>
