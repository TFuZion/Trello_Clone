<template>
  <section>
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
// import { useCardStore } from "@/store/index.js";
import { useCreateCard } from "@/composables/useCards";
import { useCard } from "@/composables/useCards";
import { useUpdateCard } from "@/composables/useCards";
import CardVue from "@/components/Card.vue";

// const store = useCardStore();

const { create } = useCreateCard();
const { cards, load } = useCard();
// const { update } = useUpdateCard();

// const updatedCard = ref(null);

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
