import { defineStore } from "pinia";
import { ref } from "vue";
import { getTableById } from "@/composables/tableComposables/useGetTable";

export const useTableStore = defineStore("table", () => {
  const table = ref(null);

  return { table };
});
