<script setup>
import { updateList } from '@/composables/ListRepository';
import { onMounted, ref } from 'vue'
const props = defineProps({
    list: {
        type: Object,
        id: null,
        name: String,
        default: {
            id: 1,
            name: 'List Name'
        }
    }
})
// DOMInput = document.getElementById... This is needed to force focus on the input when it is displayed
const DOMInput = ref(null);
const listName = ref('');
const emit = defineEmits(['list-name-change', 'close'])

async function handleSubmit() {
    if (props.list.name === '') {
        handleClose();
        return
    }
    // const listNameToSend = listName.value
    const res = await updateList(props.list.id, props.list)
    console.log(res);
    emit('list-name-change', res)
    listName.value = '';
}

function handleClose() {
    emit('close');
    listName.value = '';
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