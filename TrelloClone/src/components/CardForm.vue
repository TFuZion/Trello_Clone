<template>
  <section class="CardForm">
    <Form class="input-card" @submit="handleSubmit">
      <Field
        type="text"
        placeholder="Titre"
        id="title"
        name="title"
        v-model="cardTitle"
      />
      <Field type="url" id="image" name="image" v-model="cardImage" />
      <Field
        as="textarea"
        id="description"
        name="description"
        v-model="cardDescription"
      />
      <Field type="checkbox" id="isDone" name="isDone" v-model="cardIsDone" />
      <Field
        type="datetime-local"
        id="endDate"
        name="endDate"
        v-model="cardEndDate"
      />
      <button type="submit">Enregistrer</button>
    </Form>
    <CardVue />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Field, Form } from "vee-validate";
import { useCreateCard } from "@/composables/useCards";
import { useCard } from "@/composables/useCards";
import { useUpdateCard } from "@/composables/useCards";
import CardVue from "@/components/Card.vue";

const { create } = useCreateCard();
const { cards, load } = useCard();

const cardTitle = ref("");
const cardDescription = ref("");
const cardIsDone = ref(false);
const cardEndDate = ref("");
const cardImage = ref("");

const card = defineProps({
  card: {
    type: Object,
    default: () => ({
      title: "",
      description: "",
      isDone: false,
      enDate: "",
      image: "",
      listId: "",
      cardMemberId: "",
      cardTagId: "",
      creationDate: new Date(),
      comments: {},
    }),
  },
});

async function handleSubmit(formValues) {
  await create(formValues);
}
</script>

<style scoped>
.CardForm {
  gap: 20px;
}
.input-card {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 50%;
  margin: auto;
  gap: 10px;
  padding-bottom: 30px;
}
.input-card button {
  align-self: center;
  width: 10%;
}
</style>
