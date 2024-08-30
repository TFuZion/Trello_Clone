<script setup>
import {addTag ,removeTag } from '@/composables/TagRepository';
import TagComponent from './TagComponent.vue';
import { ref, onMounted } from 'vue'


const emit = defineEmits(['return', 'close-tag-modal', 'create-tag', 'delete-tag'])

const colorList = ['#baf3d8', '#f8e6a0', '#fedec8', '#ffd5d2', '#dfd8fd',
    '#4bce97', '#f5cd47', '#fea362', '#f87168', '#9f8fef',
    '#1f845a', '#946f00', '#c25100', '#c9372c', '#6e5dc6',
];


const props = defineProps({
    tag: {
        id: null,
        color: String,
        content: String,
        type: Object,
        default: {
            id: null,
            color: '#4bce97',
            content: ''
        }
    },
    isEditing: false,
})

const tagColor = ref(props.tag.color)
const tagContent = ref('')
const DOMInput = ref(null)

function setBackgroundColor(color) {
    tagColor.value = color
}

async function createTag() {
    const tag = {
        color: tagColor.value,
        content: tagContent.value
    }
    const res = await addTag(tag)
    console.log(res);
    emit('create-tag', tag);
    console.log(tag.color);
    console.log(tag.content);
}

async function deleteTag(tag){
    const res = await removeTag(tag.id)
    emit('delete-tag', res)
}

onMounted(() => {
    DOMInput.value.focus();
})
</script>

<template>
    <section>
        <header>
            <button @click="$emit('return')">&lt</button>

            <h2>Create a tag</h2>
            <button @click="$emit('close-tag-modal')">X</button>
        </header>
        <div class="color-displayer-container">
            <TagComponent class="color-displayer" :background-color="tagColor" :content="tagContent" />
        </div>
        <p>Title</p>
        <input ref="DOMInput" v-model="tagContent" type="text" name="name" id="name">
        <p>Pick a color</p>
        <div class="color-list-container">
                <button v-for="(color, index) in colorList" :key="index" :class="{ 'color-border': color === tagColor}"  @click="setBackgroundColor(color)"
                    :style="{ background: color }" class="color" ></button>
        </div>
        <hr>
        <div class="button-container">
            <button @click="createTag" class="create-button">Create</button>
            <button v-show="isEditing" @click="deleteTag(tag)">Delete</button>
        </div>
    </section>
</template>

<style scoped>
section {
    
    width: 305px;
    box-shadow: var(--ds-shadow-overlay, 0px 8px 12px #091e4226, 0px 0px 1px #091e424f);
    border-radius: 8px;
    padding: 0px 12px 12px;

}

section>* {
    display: block;
}

h2 {
    font-size: 14px;
}

header {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

p {
    margin: 12px 0 8px;
    font-size: 12px;
    font-weight: 500;
}

.color-displayer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #efefef;
    margin: 0 -12px;
    padding: 32px;
}

.color-displayer {
    width: 240px;
    height: 32px;
    padding: 0 12px;
}

#name{
    width: 100%;
    padding: 8px 12px;
}


#name:focus {
    outline: none;
    border-radius: 3px;
    border: 2px solid rgb(75, 135, 255);
    
}

.color-list-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 4px;
    margin-bottom: 8px;
}


.color {
    position: relative;
    width: 50px;
    height: 32px;
    cursor: pointer;
    border-radius: 2px;
    border: 2px solid white;

}

.color:focus{
    outline: 2px solid #0c66e4;
}

hr {
    background-color: var(--ds-border, #091e4224);
    border: 0;
    height: 1px;
    margin: 16px 0;
    padding: 0;
    width: 100%;
}
.create-button{
    border: none;
    background-color: var(--ds-background-brand-bold, #0c66e4);
    box-shadow: none;
    color: var(--ds-text-inverse, #ffffff);
    padding: 6px 12px;
    font-weight: 700;
    border-radius: 3px;
}
</style>