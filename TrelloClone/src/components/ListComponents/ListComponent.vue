<script setup>
import { ref } from 'vue'
import AddCardComponent from './AddCardComponent.vue';
import ListNameInputComponent from './ListNameInputComponent.vue';
import ProfilePictureComponent from '@/components/ListComponents/ProfilePictureComponent.vue';
import draggable from 'vuedraggable'
import { updateList, removeList } from '@/composables/ListRepository';

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
const emit = defineEmits(['deleted-list'])
const list = ref(props.initialList)
const isAddingCard = ref(false);

//#region EVENT HANDLING
async function handleAddCard(card) {
    list.value.cards.push(card)
    const result = await updateList(list.value.id, list.value)
    list.value = result
    closeModal();
}


async function handleChange() {
    try {
        const result = await updateList(list.value.id, list.value)
        list.value = result;
    } catch (error) {
        console.log(error);
    }
}

async function deleteList() {
    try {
        await removeList(list.value.id)
        emit('deleted-list', list.value)
    } catch (error) {
        console.log(error);
    }

}
//#endregion

</script>
<template>
    <section class="list">
        <header class="list-name">
            <ListNameInputComponent :initial-list="list" />
            <button @click="deleteList" class="delete-button">X</button>
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
        <div>
            <AddCardComponent @add-card="handleAddCard" />
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


</style>