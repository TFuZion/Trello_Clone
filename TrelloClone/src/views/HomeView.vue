<script setup>
import TableComponent from '@/components/TableComponents/TableComponent.vue';
import { getTableById } from '@/composables/tableComposables/useGetTable';


const table = await getTableById(1)

</script>

<template>
  <main>
    <div id="navbar"></div>
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

#navbar {
  background: #b4b4b4;
}

#table {
  display: flex;
}
</style>
