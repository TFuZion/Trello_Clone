import axios from "axios";
import { onMounted, ref } from "vue";

export const useTables =  () => {
  const PATH_API = "http://localhost:3000/tables/";
  const tables = ref(null);
  const load = async() => {
    try {
      const res = await axios.get(PATH_API);
      tables.value = res.data;
    } catch (e) {
      console.error(e);
    }
  }
  onMounted(() => {
    load();
  });

  return {tables, load}
}