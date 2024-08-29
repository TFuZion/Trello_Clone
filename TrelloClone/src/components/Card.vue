<template>
  <section>
    <ul v-if="cards">
      <li v-for="c in cards" :key="c.id">
        <h3>Titre: {{ c.title }}</h3>
        <p>Description:{{ c.description }}</p>
        <p>Image: {{ c.image }}</p>
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

<style scoped></style>
