import { defineStore } from "pinia";

export const useCardStore = defineStore("card", {
  state: () => ({
    lastCardId: 0,
    cards: [],
    isOverlayVisible: false,
  }),
  actions: {
    createCard(payload) {
      this.lastCardId++;
      const card = {
        listId: payload.listId,
        id: this.lastCardId,
        name: payload.name,
        description: payload.description || "",
        isDone: payload.isDone || false,
        endDate: payload.endDate || null,
        image: payload.image || null,
        // Add other attributes
      };
      this.cards.push(card);
    },
    saveCard(payload) {
      const cardIndex = this.cards.findIndex((card) => card.id === payload.id);
      if (cardIndex !== -1) {
        this.cards[cardIndex] = { ...this.cards[cardIndex], ...payload };
      }
    },
    deleteCard(payload) {
      this.cards = this.cards.filter((card) => card.id !== payload.id);
    },
  },
  getters: {
    getCardById: (state) => (id) => {
      return state.cards.find((card) => card.id === id);
    },
  },
});
