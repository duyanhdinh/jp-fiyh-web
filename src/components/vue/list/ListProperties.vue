<script lang="ts" setup>
import properties from '../../../content/properties'
import Property from '../card/Property.vue'

// general class
// let t = ''
// properties.map(item => {
//     t += `shadow-[${item.color.classic}] `
// })
// console.log(t)
</script>

<template>
    <div class="w-full h-[120px] flex shadow-xl">
        <Property
                v-for="(item, index) of properties"
                :key="index"
                :data="item"
                class="h-full basis-1/12"
        />
    </div>
</template>

<style scoped>

</style>
