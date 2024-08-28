<template>
  <section>
    <h1>CARD</h1>
    <div class="card">
      <Form @submit="handleName">
        <label for="name">Name</label>
        <Field type="text" id="name" name="name" v-model="name" />
      </Form>
      <Form @submit="handleDescription">
        <label for="description">Description</label>
        <Field
          as="textarea"
          id="description"
          name="description "
          v-model="description"
        >
        </Field>
      </Form>
      <Form @submit="handleCheklist">
        <label for="checklist">Checklist</label>
        <Field
          type="checkbox"
          id="checklist"
          name="checklist"
          v-model="cheklist"
        />
      </Form>
      <Form @submit="handleEndDate">
        <label for="endDAte">Date de fin</label>
        <Field
          type="datetime-local"
          id="endDAte"
          name="endDAte"
          v-model="endDAte"
        />
      </Form>
      <Form @submit="handleImage">
        <label for="image">Image</label>
        <Field type="url" id="image" name="image" v-model="image" />
      </Form>
      <Form @submit="handleComments">
        <label for="comments">Commentaires</label>
        <Field type="text" id="comments" name="comments" v-model="comments" />
      </Form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Field, Form } from "vee-validate";

let name = ref("");

let description = ref("");

let cheklist = ref("");

let endDAte = ref(Date);

let image = ref("");

let comments = ref("");

function handleName() {
  console.log(name);
}
function handleDescription() {
  console.log(description);
}
function handleCheklist() {
  console.log(cheklist);
}
function handleEndDate() {
  console.log(endDAte);
}
function handleImage() {
  console.log(image);
}
function handleComments() {
  console.log(comments);
}
</script>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
}
</style>
