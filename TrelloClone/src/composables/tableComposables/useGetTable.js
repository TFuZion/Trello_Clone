import { Table } from "@/Classes/Table";
import axios from "axios";

export async function getTableById(tableId) {
  const API = import.meta.env.VITE_APP_DB_URL + "tables" + tableId;

  try {
    const res = await axios.get(API);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
