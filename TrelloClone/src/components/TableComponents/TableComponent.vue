<script setup>
import ListComponent from '../ListComponents/ListComponent.vue';
import draggableComponent from 'vuedraggable';
import { ref } from 'vue'
import { useUpdateTable } from '@/composables/tableComposables/useUpdateTable';
import AddListComponent from '../ListComponents/AddListComponent.vue';

const props = defineProps({
  initialTable: Object
})
const table = ref(props.initialTable)

const { updateTable } = useUpdateTable()

async function handleChange() {
  try {
    const res = await updateTable(table.value.id, table.value)
    table.value = res;
  } catch (error) {
    console.log(error);
  }

}

function handleAddList(newList) {
  table.value.lists.push(newList)
}

function handleDeleteList(value) {
  const index = table.value.lists.indexOf(value)
  table.value.lists.splice(index, 1)
}



</script>

<template>
  <section id="table-container">
    <draggableComponent :list="table.lists" item-key="id" group="list" tag="section" @change="handleChange"
      class="grid">
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
