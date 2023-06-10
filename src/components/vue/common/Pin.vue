<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import type {Ref} from "vue";

interface Props {
  offsetTop?: number;
  offsetBottom?: number;
}
const props = withDefaults(defineProps<Props>(), {
  offsetTop: 80,
  offsetBottom: 40,
});

const el: Ref = ref(null)
const pin: Ref = ref(false)
const footerShowing: Ref = ref(false)
const defaultTop = ref(0)

const classPin = computed(() => ({
  fixed: pin.value,
  'top-0': pin.value,
  'top-footer-bottom': footerShowing.value,
  'z-100': pin.value
}))

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (!pin.value && window.scrollY <= document.documentElement.scrollHeight - window.outerHeight - props.offsetBottom) {
      defaultTop.value = props.offsetTop
    }

    if (el.value.clientHeight <= window.outerHeight - props.offsetBottom) {
      footerShowing.value = false;
    } else {
      footerShowing.value = window.scrollY > document.documentElement.scrollHeight - window.outerHeight - props.offsetBottom;
    }


    pin.value = window.scrollY >= props.offsetTop || footerShowing.value
  })
})
</script>

<template>
  <div ref="el" :class="[classPin]">
    <slot />
  </div>
</template>

<style scoped>

</style>