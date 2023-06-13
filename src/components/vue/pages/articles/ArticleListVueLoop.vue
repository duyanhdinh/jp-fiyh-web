<script setup lang="ts">
import ArticleListVueChild from "@vue-components/pages/articles/ArticleListVueChild.vue";

interface Props {
  data: object;
  from: string;
}
const props = withDefaults(defineProps<Props>(), {});

const getHrefArticle = (item: any) => {
  const prefix = props.from
    .replace("articles", "article")
    .replaceAll("/list-", "/");

  return `${prefix}/${item.slug}`;
};
</script>

<template>
  <ul
    v-for="(item, key, index) of props.data"
    :key="`${key}-${index}`"
    class="list-inside list-disc ml-3 lg:ml-6 capitalize my-2"
  >
    <template v-if="item.child">
      <ArticleListVueChild :data="data" :from="from" :item="item" />
    </template>

    <li v-else class="underline lg:truncate" :title="item.title">
      <a :href="getHrefArticle(item)" target="_blank">{{ item.title }}</a>
    </li>
  </ul>
</template>

<style scoped></style>
