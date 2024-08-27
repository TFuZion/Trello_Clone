<script setup>
import Table from "@/components/Table.vue";
</script>

<template>
  <main>
    <div id="navbar"></div>
    <div id="table">
      <Table />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
}
#navbar {
  min-height: 100dvh;
  width: 20%;
}
#table {
  display: flex;
  width: 80%;
  min-height: 100dvh;
}
</style>
