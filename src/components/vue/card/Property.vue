<script lang="ts" setup>
interface Props {
    data: object,
}
const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
    <a
            href="/"
            class="group cursor-pointer">
        <div
                class="w-full h-[88px] flex justify-center
                items-center border border-b-0 border-[#BFBFBF] shadow-inner
                bg-slate-300 group-hover:bg-slate-500 group-hover:border-white transition ease-in-out delay-75"
        >
            <div
                    :class="[`bg-[url('/assets/images/properties/pp_${props.data.key}.png')]`, `shadow-[${props.data.color.classic}]`]"
                    class="w-[64px] h-[64px] rounded-full bg-cover shadow-lg bg-white group-hover:scale-125 transition ease-in-out delay-75"
            ></div>
        </div>
        <div
                :class="[`from-[${props.data.color.light}]`, `to-[${props.data.color.dark}]`, `text-[${props.data.color.text}]`]"
                class="w-full h-[32px] bg-gradient-to-r flex justify-center items-center font-semibold text-[14px]"
        >{{ $t(`properties.${props.data.key}`) }}</div>
    </a>
</template>

<style scoped>

</style>
