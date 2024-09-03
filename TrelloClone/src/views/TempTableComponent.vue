<script setup>
import draggable from 'vuedraggable'
import ListComponent from '@/components/ListComponents/ListComponent.vue';
import { ref } from 'vue'

let lists = ref([{
    id: 1,
    name: "A",
    cards: [{
        name: "a",
        members: ['Rémi Debruyne', 'Manu Max']
    }],
},
{
    id: 2,
    name: "B",
    cards: [{
        name: "a",
        members: ['Rémi Debruyne', 'Manu Max']
    }],
},
{
    id: 3,
    name: "C",
    cards: [{
        name: "c",
        members: ['Rémi Debruyne', 'Manu Max']
    }],
},
{
    id: 4,
    name: "D",
    cards: [{
        name: "a",
        members: ['Rémi Debruyne', 'Manu Max']
    }],
}
])

</script>

<template>

    <ul>
        <draggable v-model="lists" item-key="id" class="draggable-container">
            <template #item="{ element, index }">
                <li>
                    <ListComponent :list="element" />
                </li>
            </template>
        </draggable>
    </ul>
</template>

<style scoped>
.draggable-container {
    height: 100vh;
}
ul>* {
    display: flex;
    list-style: none;
    gap: 2rem;
}
</style>