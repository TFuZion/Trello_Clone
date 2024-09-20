import axios from "axios";

export async function addCard(card) {
  const API = import.meta.env.VITE_APP_DB_URL + 'cards/'+ 'create';
  try {
    const res = await axios.post(API, card);
    return res.data.card;
  } catch (error) {
    console.log(error);
  }
}

export async function updateCard(card) {
  const API = import.meta.env.VITE_APP_DB_URL + 'cards/' + 'update/' +  card.id;
  try {
    const result = await axios.put(API, card)
    return result.data.card
  } catch (error) {
    console.log(error);
  }

}
