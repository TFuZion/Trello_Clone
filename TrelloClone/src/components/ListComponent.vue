<script setup>
import { ref } from 'vue'

const listName = ref('')
const cardList = ref([])

listName.value = "Card name"
cardList.value = ["tache 1", "tache 2", "tache 3"]

</script>

<template>
    <section class="list">
        <header>
            <h2>
                {{ listName }}
            </h2>
            <button class="dot-button">X</button>
        </header>
        <ul class="card-container">
            <li v-for="(card, index) in cardList" :key="card">
                <div class="card">
                    {{ card }}
                </div>
            </li>
        </ul>
        <div class="button-container">
            <button class="add-card-button">+ Ajouter une carte</button>
        </div>
    </section>
</template>

<style scoped>
* {
    color: #203354;
    font-family: 'Roboto', sans-serif;
}

h2 {
    font-size: 14px;
    margin: 0;
    padding: 6px 8px 6px 12px;
}

.dot-button {
    padding: 8px;
    border-radius: 8px;
    width: 32px;
    height: 32px;
}

.dot-button:hover {
    background-color: #091E4224;

}

ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    list-style-type: none;
    padding: 2px 4px;
    margin: 0px 4px;
}

.list {
    width: 272px;
    background-color: #f1f2f4;
    border-radius: 10px;
    padding: 0px 0px 8px;
}

header {
    vertical-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px 8px;
}


.card {
    background-color: white;
    box-shadow: var(--ds-shadow-raised, 0px 1px 1px #091e4240, 0px 0px 1px #091e424f);
    border-radius: 8px;
    min-height: 36px;
    padding: 8px 12px 4px;
}

.card:hover{
    box-shadow: 0px 0px 0px 1.5px rgb(1, 145, 255);
}

.button-container {
    padding: 8px 8px 0px;

}

.add-card-button {
    width: 100%;
    border-radius: 8px;
    padding: 6px 12px 6px 8px;
}

.add-card-button:hover {
    background-color: #091E4224;
}
</style>