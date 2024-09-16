<script setup>
import TableComponent from '@/components/TableComponents/TableComponent.vue';
import { getTableById } from '@/composables/tableComposables/useGetTable';
import NavbarComponent from '@/components/NavbarComponent.vue';
import { getTables } from '@/composables/tableComposables/getTables';
import { ref } from 'vue';


// fetch all the tables from the db
const tablesFromDb = await getTables();
const listsIds = tablesFromDb.map(table => table.id);


// serve as the default table to be used
// const table = await getTableById(2)
// const selectedTable = ref(table);

const componentKey = ref(0)

function handleSelectTable(tableToSelect) {
  selectedTable.value = tableToSelect;
  componentKey.value += 1;
}

</script>

<template>
  <main>
    <div>
      <button @click="console.log(tables)">test</button>
      <NavbarComponent :initial-tables="tables" @select-table="handleSelectTable" />
    </div>
    <div id="table">
      <TableComponent :initial-table="selectedTable" :key="componentKey" />
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
