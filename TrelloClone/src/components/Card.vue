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
    <section class="cardForm" v-if="cards">
      <Form
        class="input-card"
        @submit="handleSubmit"
        v-for="c in cards"
        :key="c.id"
      >
        <Field name="id" style="display: none" :model-value="c.id" />
        <Field
          type="text"
          placeholder="Titre"
          id="title"
          name="title"
          :model-value="c.title"
        >
        </Field>
        <Field type="url" id="image" name="image" :model-value="c.image" />
        <Field
          as="textarea"
          id="description"
          name="description"
          :model-value="c.description"
        ></Field>
        <Field
          type="checkbox"
          id="isDone"
          name="isDone"
          :model-value="c.isDone"
        ></Field>
        <Field
          type="datetime-local"
          id="endDate"
          name="endDate"
          :model-value="c.endDate"
        ></Field>
        <div class="btn-gtp">
          <button type="submit">Modifier</button>
          <button @click="handleRemove(c.id)">Delete</button>
        </div>
      </Form>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Field, Form } from "vee-validate";
import { storeToRefs } from "pinia";

import { useDeleteCard } from "@/composables/useCards";
import { useCard } from "@/composables/useCards";
import { useUpdateCard } from "@/composables/useCards";

const { load } = useCard();
const { cards } = storeToRefs(useCard());
const { remove } = useDeleteCard();
const { update } = useUpdateCard();

async function handleSubmit(formValues) {
  await update(formValues.id, formValues);
  load();
}

async function handleRemove(id) {
  await remove(id);
  load();
}
</script>

<style scoped>
/* Card FORM */
.cardForm {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
}
.input-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.input-card input {
  border: 1px solid black;
  padding: 20px;
  margin: 8px;
  border-radius: 5px;
}
.btn-grp {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
