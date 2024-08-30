import axios from 'axios'
const API = "http://localhost:3000/tags/"

export async function geTags(){
    const tags = ref([])
    try {
        const res = await axios.get(API)
        tags.value = res.data
        return tags
    } catch (error) {
        console.log(error);
    }
}

export async function updateTag(tagId, updatedTag){
    try {
        const res = await axios.put(API + tagId, updatedTag)
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export async function addTag(tagToAdd) {
    try {
        const res = await axios.post(API, tagToAdd)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export async function removeTag(tagId){
    try {
        const res = await axios.delete(API + tagId)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}