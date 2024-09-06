<script setup>
import { Table } from '@/Classes/Table';
import { ref } from 'vue'


const props = defineProps({
    initialTables: {
        Type : Array
    }
});

const tables = ref(props.initialTables)

function test(){
    console.table(props.initialTables);

    console.log("ma ref tables :");
    
    console.table(tables.value)
    console.table(tables.value)
}

</script>

<template>
    <h2>Your workspace</h2>
    <button @click="test">test</button>
    <p v-if="initialTables.length > 0">Il y a {{ initialTables.length }} element dans mon defineProps</p> 
    <p v-if="tables.length === 0">
        Tables est vide
    </p>
    <p v-else>Il y a {{ tables.length }} élement dans ma ref tables</p>
        <!-- <p v-else v-for="(table, index) in tables" :key="index">{{ table.name }}</p> -->
    <button>Create table</button>
</template>

<style scoped>
    h2 {
        /* background-color: w; */
    }
</style>