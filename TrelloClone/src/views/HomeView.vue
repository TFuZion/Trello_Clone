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
  display: flex;
  height: 100vh;
  width: 100vw;
}

#navbar {
  width: 15%;
  background: #b4b4b4;
}

#table {
  display: flex;
}
</style>
