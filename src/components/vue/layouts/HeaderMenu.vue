<script lang="ts" setup>
import { inject, onMounted, onUnmounted } from "vue";
import ArrowDown from "@vue-components/icon/common/ArrowDown.vue";
import { useMenuStore } from "@vue-stores/menu";
import { storeToRefs } from "pinia";
const menuStore = useMenuStore();
const { articlesMenu } = storeToRefs(menuStore);

const i18n = inject("i18n");

const name: String = i18n.site.name;

onMounted(() => {
  menuStore.init();
});

onUnmounted(() => {
  menuStore.$dispose();
});
</script>

<template>
  <VMenu :distance="6" :triggers="['hover', 'focus']" :hideTriggers="['click']">
    <!-- This will be the popover reference (for the events and position) -->
    <button class="w-full h-full">
      <a
        class="flex items-center lg:text-[20px] text-[16px] capitalize hover:underline font-semibold"
        href="/articles"
      >
        {{ i18n.header.menu.articles.title }}
        <ArrowDown class="lg:w-[14px] lg:h-[14px] w-[12px] h-[12px] ml-[8px]" />
      </a>
    </button>

    <!-- This will be the content of the popover -->
    <template #popper>
      <div
        v-for="(itemMenu, keyMenu, indexMenu) of articlesMenu"
        :key="`${keyMenu}-${indexMenu}`"
        class="w-[160px]"
      >
        <VMenu placement="left-start" :hideTriggers="['click']">
          <!-- This will be the popover reference (for the events and position) -->
          <button class="w-full h-full px-[12px] py-[6px] hover:bg-[#4180f4]">
            <a
              :href="`/articles/${itemMenu.slug}`"
              class="w-full h-full flex justify-start capitalize underline font-semibold"
              >{{ itemMenu.title }}
            </a>
          </button>

          <!-- This will be the content of the popover -->
          <template #popper>
            <div
              v-if="itemMenu.child"
              v-for="(itemMenu2, keyMenu2, indexMenu2) of itemMenu.child"
              :key="`${keyMenu2}-${indexMenu2}`"
              class="w-[160px] px-[12px] py-[6px] capitalize underline"
            >
              <VMenu placement="left-start" :hideTriggers="['click']">
                <!-- This will be the popover reference (for the events and position) -->
                <button
                  class="w-full h-full px-[12px] py-[6px] hover:bg-[#4180f4]"
                >
                  <a
                    :href="`/articles/${itemMenu.slug}/${itemMenu2.slug}`"
                    class="w-full h-full flex justify-start capitalize underline font-semibold"
                    >{{ itemMenu2.title }}</a
                  >
                </button>

                <!-- This will be the content of the popover -->
                <template #popper>
                  <div
                    v-for="(itemMenu3, keyMenu3, indexMenu3) of itemMenu2.child"
                    :key="`${keyMenu3}-${indexMenu3}`"
                    class="w-auto max-w-[500px] px-[12px] py-[6px] capitalize underline hover:bg-[#4180f4]"
                    :title="itemMenu3.title"
                  >
                    <a
                      :href="`/article/${itemMenu.slug}/${itemMenu2.slug}/${itemMenu3.slug}`"
                      class="w-full h-full flex justify-start capitalize underline font-semibold"
                      ><div class="w-full truncate">
                        {{ itemMenu3.title }}
                      </div></a
                    >
                  </div>
                </template>
              </VMenu>
            </div>
          </template>
        </VMenu>
      </div>
    </template>
  </VMenu>
</template>

<style scoped></style>
