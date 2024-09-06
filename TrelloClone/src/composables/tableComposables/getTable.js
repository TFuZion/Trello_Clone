import {ref} from "vue"
import axios from "axios";

export async function getTable(){
    const API = "http://localhost:3000/tables/";
    const tables = ref([])
      try {
        const res = await axios.get(API);
        tables.value = res.data;
        return tables
      } catch (e) {
        console.error(e);
      }
}
