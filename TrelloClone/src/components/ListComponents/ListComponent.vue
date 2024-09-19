<script setup>
import { ref } from 'vue'
import AddCardComponent from './AddCardComponent.vue';
import ListNameInputComponent from './ListNameInputComponent.vue';
import ProfilePictureComponent from '@/components/ListComponents/ProfilePictureComponent.vue';
import draggable from 'vuedraggable'
import { updateList } from '@/composables/ListRepository';
const props = defineProps({
    initialList: {
        type: Object,
        default: {
            id: 1,
            tableId: 1,
            name: "To do",
            cards: [
                {
                    id: 1,
                    name: "a",
                    members: [
                        "Rémi Debruyne",
                        "Manu Max"
                    ]
                },
                {
                    id: 2,
                    name: "b",
                    members: [
                        "Manu Max"
                    ]
                },
                {
                    id: 3,
                    name: "test",
                    members: [
                        "Manu Max"
                    ]
                }
            ]
        }
    },
})

const list = ref(props.initialList)

// Define the type of modal to be opened
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
async function handleAddCard(card) {
    console.log();

    list.value.cards.push(card)

    console.log("list.value.id = ", list.value.id);
    console.log("list.value = ", list.value);


    const res = await updateList(list.value.id, list.value)
    console.log("This is response from updateList() : ", res);
    console.table(res);

    list.value = res
    closeModal();
}

function handleListNameChange(listFrominput) {
    list.value = listFrominput;
    closeModal()
}

async function handleChange() {
    const res = await updateList(list.value.id, list.value)
    console.log(res);

    list.value = res;

}
//#endregion
</script>
<template>
    <section class="list">
        <header class="list-name">
            <!-- Display the name or an input to change it -->

            <!-- Decomposed ListComponent into sub component to not overcrowed parent with logic -->
            <ListNameInputComponent @list-name-change="handleListNameChange" :initial-list="list"/>
            <button @click="$emit('delete')" class="delete-button">X</button>
        </header>
        <draggable :list="list.cards" group="cards" item-key="id" tag="div" @change="handleChange"
            class="card-container">
            <template #item="{ element, index }">
                <div class="card">
                    {{ element.name }}
                    <div class="profile-picture">
                        <ProfilePictureComponent v-for="(element, index) in element.members" :key="index"
                            :name="element" />
                    </div>
                </div>
            </template>
        </draggable>
        <!-- Display a button to add a card or an input to add a card -->
        <div v-if="!isAddingCard">
            <button @click="openModal(cardModal)" class="add-card-button">+ Add a new card</button>
        </div>
        <div v-else="isAddingCard">
            <!-- Decomposed ListComponent into sub component to not overcrowed it with logic -->
            <AddCardComponent @add-card="handleAddCard" @close="closeModal()" />
        </div>
    </section>
</template>

<style scoped>
* {
    color: #203354;
    font-family: 'Roboto', sans-serif;
}

.list {
    width: 272px;
    border-radius: 10px;
    padding: 0px 8px 8px;
    display: flex;
    flex-direction: column;
    background-color: #f1f2f4;
    height: fit-content;
}

.list-name:hover {
    cursor: pointer;
}

header {
    vertical-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px 8px;
    overflow-wrap: break-word;

}

h2 {
    width: 80%;
    font-size: 14px;
    margin: 0;
    padding: 6px 8px 6px 12px;
    font-weight: 500;
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
    list-style-type: none;
    padding: 2px 4px;
    margin: 0px 4px;
}

.card-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 10px;
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
    box-shadow: 0px 0px 0px 1.5px #0191ff;
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