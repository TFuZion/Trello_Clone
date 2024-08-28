<template>
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
      name="description "
      v-model="cardDescription"
    />
    <Field type="checkbox" id="isDone" name="isDone" v-model="cardIsDone" />
    <Field
      type="datetime-local"
      id="endDAte"
      name="endDAte"
      v-model="cardEndDate"
    />
    <button type="submit">Enregistrer</button>
  </Form>
</template>

<script setup>
import { ref } from "vue";
import { Field, Form } from "vee-validate";
import { useCardStore } from "@/store/index.js";

const store = useCardStore();
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
    }),
  },
});

const handleSubmit = () => {
  console.table(card);
  store.createCard(card);
};
</script>

<style scoped>
.input-card {
  position: relative;
  background-color: white;
  min-height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  word-break: break-all;
  font-size: 16px;
}
</style>
