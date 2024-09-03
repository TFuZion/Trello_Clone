<script setup>
import { Table } from '@/Classes/Table';
import ListComponent from '../ListComponents/ListComponent.vue';
import draggableComponent from 'vuedraggable';
import {ref} from 'vue'
import { useUpdateTable } from '@/composables/tableComposables/useUpdateTable';
import AddListComponent from '../ListComponents/AddListComponent.vue';

const props = defineProps({
  initialTable: {
    type: Table,
    default: {
      // "id": 1,
      // "name": "a",
      // "lists": [
      //   {
      //     "id": 1,
      //     "tableId": 1,
      //     "name": "This is a default props list",
      //     "cards": [
      //       {
      //         "name": "a",
      //         "members": ["Rémi Debruyne", "Manu Max"]
      //       },
      //       {
      //         "name": "b",
      //         "members": ["Manu Max"]
      //       }
      //     ]
      //   },
      //   {
      //     "id": 2,
      //     "tableId": 1,
      //     "name": "On going",
      //     "cards": [
      //       {
      //         "id": 3,
      //         "name": "c",
      //         "members": ["Rémi Debruyne", "Manu Max"]
      //       },
      //       {
      //         "id": 4,
      //         "name": "d",
      //         "members": ["Manu Max"]
      //       }
      //     ]
      //   }
      // ],
      // "tags": [
      //   {
      //     "id": "98e8",
      //     "color": "#4bce97",
      //     "content": "qsdqsd"
      //   },
      //   {
      //     "id": "7063",
      //     "color": "#ffd5d2",
      //     "content": "dqsdqs"
      //   },
      //   {
      //     "id": "fe86",
      //     "color": "#f8e6a0",
      //     "content": "dqsdsq"
      //   }
      // ]
    }
  }

})

const table = ref(props.initialTable)

const {updateTable} = useUpdateTable()

async function handleChange(){
  const res = await updateTable(table.value.id, table.value)
  table.value = res;
}

function handleAddList(newList){
  table.value.lists.push(newList)
}

</script>

<template>
  <section id="table-container">
    <draggableComponent :list="table.lists" item-key="id" group="list" tag="section" @change="handleChange" class="grid">
      <template #item="{element}">
          <ListComponent  :initialList="element"/>
        </template>
      </draggableComponent>
      <AddListComponent @add-list="handleAddList" class="addList" />
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
  gap: 12px;;
}
.grid  {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.addList{
  width: 272px;
  height: fit-content;
}


</style>
