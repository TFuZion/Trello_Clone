<template>
  <section class="card">
    <ul v-if="cards">
      <li v-for="c in cards" :key="c.id">
        <h3>Titre: {{ c.title }}</h3>
        <p>Description: {{ c.description }}</p>
        <p>Date de fin: {{ c.endDate }}</p>
        <p>Complété: {{ c.isDone }}</p>
        <button @click="handleRemove(c.id)">Delete</button>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { useDeleteCard } from "@/composables/useCards";
import { useCard } from "@/composables/useCards";
import { storeToRefs } from "pinia";

const { load } = useCard();
const { cards } = storeToRefs(useCard());
const { remove } = useDeleteCard();

async function handleRemove(id) {
  await remove(id);
  load();
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
}
.card ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card li {
  gap: 20px;
  border: 1px solid black;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
}
.card button {
  border-radius: 5px;
}
</style>
