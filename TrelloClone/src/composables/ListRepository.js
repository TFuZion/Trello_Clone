import axios from 'axios'
const API = import.meta.env.VITE_APP_DB_URL + 'lists/'

export async function getListByTableId(id){
    try {
        const result = await axios.get(API + 'cards/' + id)
        result.data

    } catch (error) {
        console.log(error);
    }
}

export async function updateList(list){
    try {
        const result = await axios.put(API + 'update/' + list.id, list)
        return result.data.list
    } catch (error) {
        console.log(error);
    }
}

export async function addList(listToAdd) {
    try {
        const result = await axios.post(API + 'create', listToAdd)
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export async function removeList(listId){
    try {
        const result = await axios.delete(API + 'delete/' + listId)
        return result.data;
    } catch (error) {
        console.log(error);
    }
}