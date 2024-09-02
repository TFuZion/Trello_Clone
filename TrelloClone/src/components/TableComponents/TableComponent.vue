<script setup>
import { Table } from '@/Classes/Table';
import ListComponent from '../ListComponent.vue';
import draggableComponent from 'vuedraggable';

const props = defineProps({
  table: {
    type: Table,
    default: {
      "id": 1,
      "name": "This is a default props",
      "lists": [
        {
          "id": 1,
          "tableId": 1,
          "name": "To do",
          "cards": [
            {
              "name": "a",
              "members": ["Rémi Debruyne", "Manu Max"]
            },
            {
              "name": "b",
              "members": ["Manu Max"]
            }
          ]
        },
        {
          "id": 2,
          "tableId": 1,
          "name": "On going",
          "cards": [
            {
              "id": 3,
              "name": "c",
              "members": ["Rémi Debruyne", "Manu Max"]
            },
            {
              "id": 4,
              "name": "d",
              "members": ["Manu Max"]
            }
          ]
        }
      ],
      "tags": [
        {
          "id": "98e8",
          "color": "#4bce97",
          "content": "qsdqsd"
        },
        {
          "id": "7063",
          "color": "#ffd5d2",
          "content": "dqsdqs"
        },
        {
          "id": "fe86",
          "color": "#f8e6a0",
          "content": "dqsdsq"
        }
      ]
    }
  }

})

</script>

<template>
  <section id="table-container">
      <draggableComponent :list="table.lists" group="list" tag="section" class="grid">
        <template #item="{element}">
          <ListComponent  :list="element"/>
        </template>
      </draggableComponent>
    <div id="addList">
      <p>+</p>
      <p>Ajoutez une autre liste</p>
    </div>
  </section>
</template>

<style scoped>
#table-container {
  /* background-image: url("../assets/backgroudTableImg/flower.svg"); */
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
#list {
  padding: 10px;
  width: 250px;
  height: 50dvh;
  background-color: grey;
}
#addList {
  padding: 10px;
  width: 250px;
  background-color: grey;
}
</style>
