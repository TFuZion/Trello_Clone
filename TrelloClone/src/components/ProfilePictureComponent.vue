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
        font-weight: 500;
        background-color: orange;
        width: 24px;
        height: 24px;
        border-radius: 100%;
    }
</style>