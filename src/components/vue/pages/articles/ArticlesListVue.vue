<script setup lang="ts">
import ArticleListVueLoop from "@vue-components/pages/articles/ArticleListVueLoop.vue";
import { tranTitle } from "@helpers/lang.helper";
interface Props {
  data: object;
  resource: string;
  from: string;
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div class="text-[18px] italic">
    {{ $t("menu_list.resource_for") }}{{ tranTitle(resource) }}:
  </div>
  <ArticleListVueLoop :data="data" :from="from" />
</template>

<style scoped></style>
