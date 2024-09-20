import axios from "axios";

export async function addCard(card) {
  const API = import.meta.env.VITE_APP_DB_URL + 'cards/';
  try {
    const res = await axios.post(API + 'create', card);
    return res.data.card;
  } catch (error) {
    console.log(error);
  }
}
