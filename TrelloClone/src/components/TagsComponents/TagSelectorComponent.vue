<script setup>
import { updateTag } from '@/composables/TagRepository';
import TagComponent from './TagComponent.vue';
import { ref } from 'vue'
import { updateList } from '@/composables/ListRepository';
const props = defineProps({
    card: {
        id: null,
        name: String,
        tags: [],
    },
    tags: {
        type: Array,
        default: [{
            id: 1,
            tableId: null,
            cardTagId: null,
            color: '#ff5c5c',
            content: 'this is the content'
        },
        {
            id: 2,
            tableId: null,
            cardTagId: null,
            color: '#579dff',
            content: 'this is the content'
        },
        {
            id: 3,
            tableId: null,
            cardTagId: null,
            color: '#e76f51',
            content: 'this is the content'
        },
        {
            id: 4,
            tableId: null,
            cardTagId: null,
            color: '#ffdd30',
            content: 'this is the content'

        }
        ]
    }
})

const emit = defineEmits(['create-tag', 'edit-tag', 'close-tag-modal', 'update-tag-list'])

const checkedTags = ref([])

function editTag(tag) {
    emit('edit-tag', tag)
}

async function handleOnChange() {
    props.card.tags = checkedTags.value

    // TODO implement updateCard logic
    const res = await updateCard()
    emit('update-tag-list', res)
}

</script>

<template>
    <section>
        <header>
            <h2>Tags</h2>
            <button @click="$emit('close-tag-modal')">X</button>
        </header>
        <div class="tag-list">
            <div class="tag-container" v-for="(tag, index) in tags" :key="tag">
                <input type="checkbox" v-model="checkedTags" :name="index" :id="index" :value="tag"
                    @change="handleOnChange">
                <label :for="index">
                    <TagComponent :color="tag.color" class="tag" />
                </label>
                <button @click="editTag(tag)">Edit</button>
            </div>
        </div>
        <button class="create-button" @click="$emit('create-tag')">Create new tag</button>
    </section>
</template>

<style scoped>
section {
    width: 305px;
    box-shadow: var(--ds-shadow-overlay, 0px 8px 12px #091e4226, 0px 0px 1px #091e424f);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: 12px;
}

header {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}

h2 {
    font-size: 14px;
}

.tag-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    margin-bottom: 10px;
}

.tag-container {
    display: flex;
    justify-content: center;
    gap: 8px;
}

.tag {
    width: 200px;
}

.create-button {
    font-weight: 700;
    border-image: 3px;
    text-align: center;
    width: 100%;
    border: none;
    background-color: #091e4224;
    color: #172b4d;
    text-decoration: none;
    padding: 6px 12px;
}
</style>