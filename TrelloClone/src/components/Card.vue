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
import { useCreateCard } from "@/composables/useCards";
import { useDeleteCard } from "@/composables/useCards";
import { useCard } from "@/composables/useCards";
import { useUpdateCard } from "@/composables/useCards";

const store = useCardStore();

const { create } = useCreateUser();
const { cards, load } = useCards();
const { remove } = useCreateCard();
const { update } = useUpdateCard();

const updatedCard = ref(null);

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
      creationDate: "",
      comments: {},
    }),
  },
});

const handleSubmit = (values) => {
  create(values);
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
