<script setup>
import { onMounted, ref } from 'vue'

// DOMInput = document.getElementById... This is needed to force focus on the input when it is displayed
const DOMInput = ref(null)
const cardName = ref('')
const emit = defineEmits(['add-card', 'close'])

async function handleSubmit() {
    if (cardName.value === '') {
        handleClose();
        return
    }
    const cardNameToSend = cardName.value
    // TODO implement addCard()
    const res = await addCard(cardNameToSend)
    emit('add-card', res)
    cardName.value = '';
}

function handleClose() {
    emit('close');
    cardName.value = '';
}

onMounted(() => {
    DOMInput.value.focus();
})

</script>

<template>
    <form @submit.prevent="handleSubmit">
        <input ref="DOMInput" @keydown.enter="$event.target.blur()" @blur="handleSubmit" v-model="cardName" type="text"
            name="card-name" id="card-name" placeholder="Enter card's name...">
        <div class="button-container">
            <button type="submit" class="add-button">Ajouter une carte</button>
            <button type="button" @click="handleClose()">X</button>
        </div>
    </form>
</template>

<style scoped>
input {
    background-color: white;
    border: 0px;
    box-shadow: 0px 1px 1px #091e4240;
    border-radius: 8px;
    min-height: 56px;
    padding: 8px 12px;
    width: 100%;
    vertical-align: top;
}

input:focus {
    outline: none;
}

.add-button {
    padding: 6px 12px;
    background-color: #0c66e4;
    color: white;
    border-radius: 3px;
    font-weight: 500;
}

.button-container {
    margin-top: 8px;
    display: flex;
    gap: 1rem;
}
</style>