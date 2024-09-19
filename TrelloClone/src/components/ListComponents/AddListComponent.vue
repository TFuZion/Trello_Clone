<script setup>
import {  ref, watch } from 'vue'
import { List } from '@/Classes/List';
import { addList } from '@/composables/ListRepository';

const isActive = ref(false)
// DOMInput = document.getElementById... This is needed to force focus on the input when it is displayed
const DOMInput = ref(null)
const listName = ref('')
const emit = defineEmits(['add-list', 'close'])

async function handleSubmit() {

    if (listName.value === '') {
        isActive.value = false;
        return;
    }

    const table = new List(listName.value);
    const res = await addList(table);
    console.log(res);
    isActive.value = false;
    emit('add-list', res)

}

function closeModal() {
    isActive.value = false;
}


function openModal() {
    isActive.value = true;
}


watch(DOMInput, () => {
    if(DOMInput.value){
        DOMInput.value.focus();
    }
})
</script>

<template>
    <button v-if="!isActive" @click="openModal" class="create-button">+ Add a new list</button>
    <section v-else>
        <form @submit.prevent="handleSubmit">
            <input ref="DOMInput" @keydown.enter="$event.target.blur()" @blur="handleSubmit" v-model="listName"
                type="text" name="list-name" id="list-name" placeholder="Enter list's name...">
            <div class="button-container">
                <button type="submit" class="add-button">Create a list</button>
                <button type="button" @click="closeModal()">X</button>
            </div>
        </form>
    </section>
</template>

<style scoped>
.create-button {
    width: 272px;
    padding: 12px;
    border-radius: 12px;
    color: white;
    background-color: #ffffff3d;
    font-weight: 700;
}

.create-button:hover {
    background-color: #ffffff28;
}

section {
    background-color: #f1f2f4;
    padding: 8px;
    border-radius: 12px;
}

input {
    background-color: white;
    border: 0px;
    box-shadow: 0px 1px 1px #091e4240;
    border-radius: 3px;
    padding: 6px 10px;
    width: 100%;
    vertical-align: top;
    font-weight: 500;
    color: #172b4d;

}

input:focus {
    outline: 2px solid #0191ff;
}

.add-button {
    padding: 6px 12px;
    background-color: #0c66e4;
    color: white;
    border-radius: 3px;
    font-weight: 500;
    font-size: 14px;
}

.button-container {
    margin-top: 8px;
    display: flex;
    gap: 1rem;
}
</style>