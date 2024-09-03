<script setup>
import { computed } from 'vue';

 const props = defineProps({
    name: String
 })

 const initials = computed(() => {
    const splitName = props.name.split(' ')
    return splitName.map(x => x.charAt(0).toUpperCase()).join('')
 })
</script>

<template>
    <div>{{ initials }}</div>
</template>

<style scoped>
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-weight: 600;
        background-color: orange;
        width: 26px;
        height: 26px;
        border-radius: 100%;
    }
</style>