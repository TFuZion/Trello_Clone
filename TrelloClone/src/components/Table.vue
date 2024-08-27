<script setup>
const testdiv = 6;
</script>

<template>
  <section id="container">
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
#container {
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
