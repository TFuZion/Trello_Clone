<script setup>
import TagComponent from './TagComponent.vue';
const props = defineProps({
    tags: {
        type: Array,
        default: [{
            id: null,
            tableId: null,
            cardTagId: null,
            color: '#ff5c5c',
            content: 'this is the content'
        },
        {
            id: null,
            tableId: null,
            cardTagId: null,
            color: '#579dff',
            content: 'this is the content'
        },
        {
            id: null,
            tableId: null,
            cardTagId: null,
            color: '#e76f51',
            content: 'this is the content'
        },
        {
            id: null,
            tableId: null,
            cardTagId: null,
            color: '#ffdd30',
            content: 'this is the content'

        }
        ]
    }
})

const emit = defineEmits(['create-tag', 'modify-tag', 'close-tag-modal'])

function modifyTag(tag){
    emit('modify-tag', tag)
}

</script>

<template>
    <section>
        <h2>Tags</h2>
        <button @click="$emit('close-tag-modal')">X</button>
        <div class="tag-list">
            <div class="tag-container" v-for="(tag, index) in tags" :key="tag">
                <input type="checkbox" :name="index" :id="index">
                <label :for="index">
                    <TagComponent :color="tag.color" />
                </label>
                <button @click="modifyTag(tag)">Edit</button>
            </div>
        </div>
        <button class="create-button" @click="$emit('create-tag')">Create new tag</button>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border: 1px solid black;
}

.tag-list {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.tag-container {
    display: flex;
    justify-content: center;
    gap: 8px;
}

.create-button {
    width: 280px;
}
</style>