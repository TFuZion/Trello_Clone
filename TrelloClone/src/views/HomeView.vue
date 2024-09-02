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
}

#navbar {
  width: 20%;
}

#table {
  display: flex;
  width: 80%;
}
</style>
