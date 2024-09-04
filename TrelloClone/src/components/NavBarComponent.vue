<script setup>
import { Table } from '@/Classes/Table';
import { ref } from 'vue'

const props = defineProps({
    initialTables: Array
})

const tables = ref(props.initialTables)
</script>

<template>
        <h2>Your workspace</h2>
        <p v-for="(table, index) in tables" :key="index">{{ table.name }}</p>
    <button>Create table</button>
</template>

<style scoped>
    h2 {
        /* background-color: w; */
    }
</style>