import axios from 'axios'
const API = "http://localhost:3000/lists"

export async function getList(){
    const lists = ref([])
    try {
        const res = await axios.get(API)
        lists.value = res.data
        return lists
    } catch (error) {
        console.log(error);
    }
}

export async function updateList(listId, updatedList){
    try {
        const res = await axios.put(API + listId, updatedList)
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export async function addList(listToAdd) {
    try {
        const res = await axios.post(API, listToAdd)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export async function removeList(listId){
    try {
        const res = await axios.delete(API + listId)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}