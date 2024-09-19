<script setup>
import { updateList } from '@/composables/ListRepository';
import {  ref, watch } from 'vue'
const props = defineProps({
    initialList: {
        type: Object,
        default: {
            "id": 1,
            "tableId": 1,
            "name": "To do",
            "cards": [
                {
                    "name": "a",
                    "members": [
                        "Rémi Debruyne",
                        "Manu Max"
                    ]
                },
                {
                    "name": "b",
                    "members": [
                        "Manu Max"
                    ]
                },
                {
                    "name": "test",
                    "members": [
                        "Manu Max"
                    ]
                }
            ]
        }
    }
})

const isOpen = ref(false)
const list = ref(props.initialList)
// DOMInput = document.getElementById... This is needed to force focus on the input when it is displayed
const DOMInput = ref(null);
const emit = defineEmits(['list-name-change'])

async function handleSubmit() {
    if (list.value.name === '') {
        isOpen.value = false;
        return;
    }
    console.log(list.value);

    const res = await updateList(list.value.id, list.value)
    emit('list-name-change', res)
    list.value.name = '';
    isOpen.value = false;
}

watch(DOMInput, () => {
    if(DOMInput.value){
        DOMInput.value.focus();
    }
})

function openModal(){
    isOpen.value = true;
}

</script>

<template>
    <h2 v-if="!isOpen" @click="openModal()">
        {{ list.name }}
    </h2>
    <form v-else @submit.prevent="handleSubmit">
        <input ref="DOMInput" @keydown.enter="$event.target.blur()" @blur="handleSubmit" type="text" name="card-name"
            id="card-name" v-model="list.name">
    </form>
</template>

<style scoped></style>