<template>
  <Form class="input-card">
    <Field
      type="text"
      placeholder="Titre"
      v-model="cardName"
      @keyup="createCard"
    />
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
    <Field type="url" id="image" name="image" v-model="cardImage" />
  </Form>
</template>

<script setup>
import { ref } from "vue";
import { Field, Form } from "vee-validate";
import { useCardStore } from "@/store/index.js";

const store = useCardStore();

// Props
defineProps({
  listId: {
    type: String,
    required: true,
  },
});

const cardName = ref("");
const cardDescription = ref("");
const cardIsDone = ref(false);
const cardEndDate = ref("");
const cardImage = ref("");

const createCard = () => {
  if (cardName.value !== "") {
    const card = {
      listId: props.listId,
      name: cardName.value,
      description: cardDescription.value,
      isDone: cardIsDone.value,
      endDate: cardEndDate.value,
      image: cardImage.value,
      // TODO: Add other necessary attributes here.
    };
    // Dispatch action to store
    store.createCard(card);
  }
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
