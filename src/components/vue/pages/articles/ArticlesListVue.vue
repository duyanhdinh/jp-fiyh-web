<script setup lang="ts">
import ArticleListVueLoop from "@vue-components/pages/articles/ArticleListVueLoop.vue";
interface Props {
  data: object;
  parentUriList: string;
  parentUriArticles: string;
  resource: string;
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div class="text-[18px] italic">
    {{ $t("menu_list.resource_for") }} {{ resource }}:
  </div>
  <ArticleListVueLoop
    :data="data"
    :parentUriList="parentUriList"
    :parentUriArticles="parentUriArticles"
  />
</template>

<style scoped></style>
