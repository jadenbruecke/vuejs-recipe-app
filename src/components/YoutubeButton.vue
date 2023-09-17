<template>
    <a :href="href" target="_blank" class="mx-1 p-3 py-2 rounded text-white bg-red-600 hover:bg-red-400 transition-colors">
        <slot>Youtube</slot>
    </a>
</template>

<script setup>

const props = defineProps({
    href: String
})

</script>