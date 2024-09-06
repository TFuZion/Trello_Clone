<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
    initialTables: Array
});

const tables = ref(props.initialTables)

onMounted(() => {
    console.log("initialTables value in onMounted hook");
    console.log(props.initialTables);

    console.log("tables.value in onMounted hook");
    console.log(tables.value);
    
})

function test(){
    console.log("props :");
    console.log(props.initialTables);

    console.log("props.initialTables is type of : ", typeof props.initialTables);


    console.log("ref raw :");
    console.table(tables)

    console.log("ref.value :");
    console.table(tables.value)
    console.log("tables.value is an array ?: ", Array.isArray(tables.value), " it is an : ", typeof tables.value);
    console.log("ref length");
    console.table(tables.value.length)
    
    
}

</script>

<template>
    <h2>Your workspace</h2>
    <button @click="test">test</button>
    <!-- <p v-if="initialTables.length > 0">Il y a {{ initialTables.length }} element dans mon defineProps</p> 
    <p v-if="tables.length === 0">
        Tables est vide
    </p>
    <p v-else>Il y a {{ tables.length }} élement dans ma ref tables</p>
        <p v-else v-for="(table, index) in tables" :key="index">{{ table.name }}</p>
    <button>Create table</button> -->
</template>

<style scoped>
    h2 {
        /* background-color: w; */
    }
</style>