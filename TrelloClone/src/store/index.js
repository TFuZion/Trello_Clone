import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCardStore = defineStore("cardStore", {
  state: () => ({
    cards: [],
  }),
  actions: {
    addCard(card) {
      this.cards.push(card);
    },
    removeCard(carId) {
      this.cards = this.cards.filter((card) => card.id !== carId);
    },
    updateCard(updatedCard) {
      const index = this.card.findIndex((card) => card.id === updatedCard.id);
      if (index !== -1) {
        this.cards[index] = updatedCard;
      }
    },
  },
});
