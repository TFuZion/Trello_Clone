<script setup>
import { onMounted, ref } from 'vue'
const props = defineProps({
    listNameProps: String
})
// DOMInput = document.getElementById... This is needed to force focus on the input when it is displayed
const DOMInput = ref(null);
const listName = ref('');
const emit = defineEmits(['list-name-change', 'close'])

function handleSubmit() {
    if (listName.value === '') {
        handleClose();
        return
    }

    const listNameToSend = listName.value
    console.log('handle submit from compo nent : ',listNameToSend );
    emit('list-name-change', listNameToSend)
    listName.value = '';
}

function handleClose() {
    emit('close');
    listName.value = '';
}

onMounted(() => {
    listName.value = props.listNameProps
    DOMInput.value.focus();
})

</script>

<template>
    <form @submit.prevent="handleSubmit">
        <input ref="DOMInput" @keydown.enter="$event.target.blur()" @blur="handleSubmit"  type="text"
            name="card-name" id="card-name" v-model="listName">
    </form>
</template>

<style scoped></style>