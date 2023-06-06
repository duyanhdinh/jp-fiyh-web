<script setup lang="ts">
interface Props {
  data: object;
  parentUriList: string;
  parentUriArticles: string;
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <ul
    v-for="(item, key, index) of props.data"
    :key="`${key}-${index}`"
    class="list-inside list-disc ml-6 capitalize my-2"
  >
    <template v-if="item.data">
      <li class="cursor-pointer font-semibold underline">
        <a :href="`${props.parentUriList}/${item.keys}`">{{ item.name }}</a>
      </li>
      <ArticleListVueLoop
        :data="item.data"
        :parentUriList="`${props.parentUriList}/${item.keys}`"
        :parentUriArticles="`${props.parentUriArticles}/${item.key}`"
      />
    </template>
    <li v-else class="underline truncate" :title="item.title">
      <a :href="`${props.parentUriArticles}/${item.slug}`" target="_blank">{{
        item.title
      }}</a>
    </li>
  </ul>
</template>

<style scoped></style>
