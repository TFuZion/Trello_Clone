<script setup>
import TableComponent from '@/components/TableComponents/TableComponent.vue';
import { onMounted, ref } from 'vue';
import { getTableById } from '@/composables/tableComposables/useGetTable';
let table = ref({});

onMounted(async () => {
  table.value = await getTableById(1)
})

</script>

<template>
  <main>
    <div id="navbar"></div>
    <div id="table">
      <TableComponent :table="table" />
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
