<script setup>
import ListComponent from '../ListComponents/ListComponent.vue';
import draggableComponent from 'vuedraggable';
import { ref } from 'vue'
import AddListComponent from '../ListComponents/AddListComponent.vue';
import { updateList } from '@/composables/ListRepository';

const props = defineProps({
  initialTable: Object
})
const table = ref(props.initialTable)

function handleAddList(newList) {
  table.value.lists.push(newList)
}

function handleDeleteList(value) {
  const index = table.value.lists.indexOf(value)
  table.value.lists.splice(index, 1)
}

async function handleChange(event){
  const list = event.moved.element;
  list.index = event.moved.newIndex;
  await updateList(list)
}

</script>

<template>
  <section id="table-container">
    <draggableComponent :list="table.lists" item-key="id" group="list" tag="section" 
      class="grid" @change="handleChange">
      <template #item="{ element }">
        <ListComponent :initial-list="element" @deleted-list="handleDeleteList" />
      </template>
    </draggableComponent>
    <AddListComponent @add-list="handleAddList" class="addList" :initial-table="table"/>
  </section>
</template>

<style scoped>
#table-container {
  width: 100%;
  background-image: url("../../assets/backgroudTableImg/ice.svg");
  background-position: center center;
  background-size: cover;
  display: flex;
  padding: 10px;
  gap: 12px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.addList {
  width: 272px;
  height: fit-content;
}
</style>
