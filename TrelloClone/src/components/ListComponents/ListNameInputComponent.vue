<script setup>
import { updateList } from '@/composables/ListRepository';
import { onMounted, ref } from 'vue'
import { List } from '@/Classes/List';
const props = defineProps({
    initialList: {
        type: List,
        default: {
            "id": 1,
            "tableId": 1,
            "name": "To dooooooooooooooooooooooooooooooo",
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

const list = ref(props.initialList)
// DOMInput = document.getElementById... This is needed to force focus on the input when it is displayed
const DOMInput = ref(null);
// const listNameInput = ref('');
const emit = defineEmits(['list-name-change', 'close'])

async function handleSubmit() {
    if (list.value.name === '') {
        handleClose();
        return
    }
    console.log(list.value);
    
    const res = await updateList(list.value.id, list.value)
    console.log(res);
    emit('list-name-change', res)
    list.value.name = '';
}

function handleClose() {
    emit('close');
    list.value.name = '';
}

onMounted(() => {
    DOMInput.value.focus();
})

</script>

<template>
    <form @submit.prevent="handleSubmit">
        <input ref="DOMInput" @keydown.enter="$event.target.blur()" @blur="handleSubmit"  type="text"
            name="card-name" id="card-name" v-model="list.name">
    </form>
</template>

<style scoped></style>