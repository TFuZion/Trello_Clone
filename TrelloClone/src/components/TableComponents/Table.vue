<script setup>
import { useTables } from '@/composables/tableComposables/useTable';

const {tables, load} = useTables();
</script>

<template>
  <section id="table-container">
    <section id="grid">
      <li id="list" v-for="test in testdiv">
      </li>
    </section>
    <div id="addList">
      <p>+</p>
      <p>Ajoutez une autre liste</p>
    </div>
  </section>
</template>

<style scoped>
#table-container {
  background-image: url("../assets/backgroudTableImg/flower.svg");
  background-position: center center;
  background-size: cover;
  display: flex;
  width: 100%;
  padding: 10px;
}
#grid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
#list {
  padding: 10px;
  width: 250px;
  height: 50dvh;
  background-color: grey;
}
#addList {
  padding: 10px;
  width: 250px;
  background-color: grey;
}
</style>
