<script setup>
import TableComponent from '@/components/TableComponents/TableComponent.vue';
import { getTableById } from '@/composables/tableComposables/useGetTable';
import { useTables } from '@/composables/tableComposables/useTable';
import NavbarComponent from '@/components/NavbarComponent.vue';
import { getTable } from '@/composables/tableComposables/getTable';
import { onMounted } from 'vue';

// const tables = await getTable();
const { tables } = useTables()
const table = await getTableById(1)

onMounted(() => {
  console.log("onmounted in homeview");
  console.log(tables.value);

})

</script>

<template>
  <main>
    <div>
      <p v-for="(table, index) in tables" :key="index">{{ table.name }}</p>
      <NavbarComponent :initialTables="tables" />
    </div>
    <div id="table">
      <TableComponent :initialTable="table" />
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
