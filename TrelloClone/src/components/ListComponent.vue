<script setup>
import { ref } from 'vue'
import ListInputComponent from './ListInputComponent.vue';
import ListNameInputComponent from './ListNameInputComponent.vue';
import ProfilePictureComponent from './ProfilePictureComponent.vue';
import { updateList } from '@/composables/ListRepository';
const props = defineProps({
    list: {
        name: String,
        cards: [],
        members: [],

        default: {
            id: 1,
            name: "List Name",
            cards: ["tache 1", "tache 2", "tache 3"],
            members: ['Rémi Debruyne','Manu Max']
        }
    }
})

const cardModal = "cardModal"
const listNameModal = "listNameModal"

let isAddingCard = ref(false);
let isUpdatingListName = ref(false)


//#region MODAL HANDLING
function openModal(modal) {
    if (modal === cardModal) {
        isAddingCard.value = true;
    }

    if (modal === listNameModal) {
        isUpdatingListName.value = true;
    }
}
function closeModal() {
    isAddingCard.value = false;
    isUpdatingListName.value = false;
}
//#endregion

//#region EVENT HANDLING
function handleAddCard(value) {
    props.list.cards.push(value)
    updateList(props.list.id, props.list)
    closeModal();
}

function handleListNameChange(value) {
    props.list.name = value
    updateList(props.list.id, props.list)
    closeModal()
}
//#endregion


</script>

<template>
    <section class="list">
        <header>
            <div class="list-name" @click="openModal(listNameModal)">
                <!-- Display the name or an input to change it -->
                <h2 v-if="!isUpdatingListName">
                    {{ list.name }}
                </h2>
                <!-- Decomposed ListComponent into sub component to not overcrowed it with logic -->
                <ListNameInputComponent v-else @list-name-change="handleListNameChange" @close="closeModal()"
                    :list-name-props="list.name" />
            </div>
            <button @click="$emit('delete')" class="delete-button">X</button>
        </header>
        <ul class="card-container">
            <li v-for="(card, index) in list.cards" :key="card">
                <div class="card">
                    {{ card }}
                    <div class="profile-picture">
                        <ProfilePictureComponent v-for="(member, index) in list.members" :key="index"  :name="member" />
                    </div>
                </div>
            </li>
            <!-- Display a button to add a card or an input to add a card -->
            <li v-if="!isAddingCard">
                <button @click="openModal(cardModal)" class="add-card-button">+ Ajouter une carte</button>
            </li>
            <li v-else="isAddingCard">
                <!-- Decomposed ListComponent into sub component to not overcrowed it with logic -->
                <ListInputComponent @add-card="handleAddCard" @close="closeModal()" />
            </li>
        </ul>
    </section>
</template>

<style scoped>
* {
    color: #203354;
    font-family: 'Roboto', sans-serif;
}

.list-name:hover {
    cursor: pointer;
}

h2 {
    font-size: 14px;
    margin: 0;
    padding: 6px 8px 6px 12px;
}

.delete-button {
    padding: 8px;
    border-radius: 8px;
    width: 32px;
    height: 32px;
}

.delete-button:hover {
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
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0px 1px 1px #091e4240;
    border-radius: 8px;
    min-height: 36px;
    padding: 8px 12px 12px;
}

.profile-picture {
    display: flex;
    gap: 6px;
    align-self: flex-end;
}

.card:hover {
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