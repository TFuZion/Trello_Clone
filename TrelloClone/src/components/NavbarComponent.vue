<script setup>
import { ref } from 'vue'
import AddTableComponent from './TableComponents/AddTableComponent.vue';

const props = defineProps({
    initialTables: Array
});

const emit = defineEmits(['select-table'])

const tables = ref(props.initialTables)

function clickOnTable(table){
 try {
     emit('select-table', table)
 } catch (error) {
    console.log(error)
 }
}

function handleTableCreation(value){
    tables.value.push(value);
}

</script>

<template>
    <section class="navbar">
        <div class="header">
            <h2>Your workspaces</h2>
            <AddTableComponent @table-created="handleTableCreation"/>
        </div>
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
    align-items: center;
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