<script lang="ts" setup>
import DateDataForm from "./DateDataForm.vue";
</script>

<template>
    <div class="relative flex w-full h-[320px] bg-[url('/assets/images/banner.png')] bg-cover shadow-xl">
        <div class="absolute inset-0 w-full h-full z-100 bg-white/40"></div>
        <div class="w-[456px] h-full"></div>
        <DateDataForm class="relative w-[252px] h-full" />
        <div class="w-[456px] h-full"></div>
    </div>
</template>

<style scoped>

</style>
