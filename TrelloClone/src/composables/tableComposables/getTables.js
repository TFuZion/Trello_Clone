import {ref} from "vue"
import axios from "axios";

export async function getTables(){
    const API = import.meta.env.VITE_APP_DB_URL;
    const tables = ref([])
      try {
        const res = await axios.get(API + 'tables');
        
        tables.value = res.data;
        return tables
      } catch (e) {
        console.error(e);
      }
}
