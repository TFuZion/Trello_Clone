<script setup>
import TableComponent from '@/components/TableComponents/TableComponent.vue';
import { getTableById } from '@/composables/tableComposables/useGetTable';
import NavBarComponent from '@/components/NavBarComponent.vue';
import { useTables } from '@/composables/tableComposables/useTable';

const { tables } = useTables()
const table = await getTableById(1)

</script>

<template>
  <main>
    <div>
      <NavBarComponent :initial-tables="tables" />
    </div>
    <div id="table">
      <TableComponent :initialTable="table" />
    </div>
  </main>
</template>

<style scoped>
main {
  /* display: flex; */
  display: grid;
  grid-template-columns: 260px auto;
  height: 100vh;
}



#table {
  display: flex;
}
</style>
