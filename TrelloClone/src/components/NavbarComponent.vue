<script setup>
import { ref } from 'vue'

const props = defineProps({
    initialTables: Array
});

const emit = defineEmits(['select-table'])

const tables = ref(props.initialTables)

function test() {
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

function clickOnTable(table){
    emit('select-table', table)
}

</script>

<template>
    <section class="navbar">
        <div class="header">
            <h2>Your workspaces</h2>
            <button>+</button>
        </div>
        <!-- <button @click="test" class="test-button">test</button> -->
         <div class="table-container">
             <button v-for="(table, index) in tables" :key="index" @click="clickOnTable(table)">{{ table.name }}</button>
         </div>
    </section>
</template>

<style scoped>
.navbar {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.5rem;
}

h2 {
    /* background-color: w; */
}

.table-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}


.test-button {
    border: 2px solid black;
    padding: 0.5rem 2rem
}
</style>