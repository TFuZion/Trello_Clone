import axios from "axios"

export async function addCard(card){
    const API = "http://localhost:3000/cards"
    try {
            const res = await axios.post(API, card)
    return res.data

    } catch (error) {
        console.log(error);
        
    }
}