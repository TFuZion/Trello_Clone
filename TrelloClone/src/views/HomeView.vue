<script setup>
import TableComponent from '@/components/TableComponents/TableComponent.vue';
import { getTableById } from '@/composables/tableComposables/useGetTable';
import NavbarComponent from '@/components/NavbarComponent.vue';
import { getTable } from '@/composables/tableComposables/getTable';
import { ref } from 'vue';

// fetch all the tables from the db
const tables = await getTable();

// serve as the default table to be used
const table = await getTableById(2)
const selectedTable = ref(table);

function handleSelectTable(tableToSelect){
  console.log('tableToSelect = ');
  console.table(tableToSelect)
  
  selectedTable.value = tableToSelect;
  
  console.log(selectedTable.value);
  
}

</script>

<template>
  <main>
    <div>
      <NavbarComponent :initial-tables="tables" @select-table="handleSelectTable" />
    </div>
    <div id="table">
      <TableComponent :initial-table="selectedTable" />
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 260px auto;
  height: 100vh;
}



#table {
  display: flex;
}


</style>
