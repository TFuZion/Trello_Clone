import { onMounted, ref } from "vue";
import axios from "axios";

const API = "http://localhost:3000/cards";

export function useCard() {
  const cards = ref(null);
  const error = ref("");
  async function load() {
    try {
      const res = await axios.get(API);
      cards.value = res.data;
      console.log(cards);
      //Format JSON complet de card
      //   {
      //     "title": "",
      //     "description": "",
      //     "isDone": false,
      //     "enDate": "",
      //     "image": "",
      //     "listId": "",
      //     "cardMemberId": "",
      //     "cardTagId": "",
      //     "creationDate": "",
      //     "comments": {}
      //   },
    } catch (e) {
      console.log(e);
      error.value = e.message;
    }
  }
  onMounted(() => {
    load();
  });

  return { cards, error, load };
}

export function useCreateCard() {
  async function create(card) {
    try {
      const res = await axios.post(API, card);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  }
  return { create };
}

export function useUpdateCard() {
  async function update(id, card) {
    try {
      const res = await axios.put(API + id, card);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
  return { update };
}

export function useDeleteCard() {
  async function remove(id) {
    try {
      const res = await axios.delete(`${API}/${id}`);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  }

  return { remove };
}
