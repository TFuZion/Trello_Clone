<script setup>
import { Form, Field } from "vee-validate";
import { ref } from "vue";
import { useCreateTable } from "@/composable/useCreateTable";
import { useTables } from "@/composable/useTable";

const PATH_BACKGROUND = "@/assets/backgroundTableImg/";
const classBackgroudTableImg = ref("a");
const nameTable = ref("");
const { load } = useTables();
const { createTable } = useCreateTable();

const handleCreateTable = async () => {
  const table = {};
  console.log(nameTable.value);
  table.name = nameTable.value;
  console.log(classBackgroudTableImg.value);
  switch (classBackgroudTableImg.value) {
    case "a":
      table.background = `${PATH_BACKGROUND}ice.svg`;
      break;
    case "b":
      table.background = `${PATH_BACKGROUND}ocean.svg`;
      break;
    case "c":
      table.background = `${PATH_BACKGROUND}crystal.svg`;
      break;
    case "d":
      table.background = `${PATH_BACKGROUND}rainbow.svg`;
      break;
    case "e":
      table.background = `${PATH_BACKGROUND}sun.svg`;
      break;
    case "f":
      table.background = `${PATH_BACKGROUND}flower.svg`;
      break;
    case "g":
      table.background = `${PATH_BACKGROUND}earth.svg`;
      break;
    case "h":
      table.background = `${PATH_BACKGROUND}alien.svg`;
      break;
    case "i":
      table.background = `${PATH_BACKGROUND}volcano.svg`;
      break;
    default:
      table.background = `${PATH_BACKGROUND}ice.svg`;
  }
  await createTable(table);
  load();
  console.log(table);
};
</script>

<template>
  <section id="add-table">
    <header>
      <h5>Créer un tableau</h5>
      <button>
        <span
          ><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z"
              fill="currentColor"
            ></path></svg
        ></span>
      </button>
    </header>
    <div id="add-table-container">
      <hr />
      <div class="previsualisation">
        <div class="backgroundTableImg" :class="classBackgroudTableImg">
          <img
            src="../assets/backgroudTableImg/modelTable.svg"
            alt="presentation"
          />
        </div>
      </div>
      <div>
        <p>Fond d'écran</p>
        <div id="grid-select-background">
          <ul>
            <li><button @click="classBackgroudTableImg = 'a'"></button></li>
            <li><button @click="classBackgroudTableImg = 'b'"></button></li>
            <li><button @click="classBackgroudTableImg = 'c'"></button></li>
            <li><button @click="classBackgroudTableImg = 'd'"></button></li>
            <li><button @click="classBackgroudTableImg = 'e'"></button></li>
            <li><button @click="classBackgroudTableImg = 'f'"></button></li>
            <li><button @click="classBackgroudTableImg = 'g'"></button></li>
            <li><button @click="classBackgroudTableImg = 'h'"></button></li>
            <li><button @click="classBackgroudTableImg = 'i'"></button></li>
          </ul>
        </div>
      </div>
      <form id="form-add-table" @submit.prevent="handleCreateTable()">
        <div id="title-table">
          Titre du tableau
          <span class="red">*</span>
        </div>
        <input v-model="nameTable" required />
        <div id="input-empty" v-show="!nameTable">
          <span>👋</span>
          <p>Le tableau doit avoir un titre</p>
        </div>
        <button :disabled="!nameTable">Créer</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
#add-table {
  position: fixed;
  inset: 349px auto auto 260px;
  width: 304px;
  color: #172b4d;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  font-display: swap;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 8px;
  outline: 0;
  background-color: #ffffff;
  box-shadow: 0px 8px 12px #091e4226, 0px 0px 1px #091e424f;
}
h5 {
  display: block;
  position: relative;
  grid-column: 1 / span 3;
  grid-row: 1;
  height: 40px;
  margin: 0;
  padding: 0 32px;
  overflow: hidden;
  color: #44546f;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.003em;
  line-height: 40px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
header {
  display: grid;
  position: relative;
  grid-template-columns: 32px 1fr 32px;
  align-items: center;
  padding: 4px 8px;
  text-align: center;
  button {
    grid-column: 3;
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: none;
    color: #626f86;
    background: transparent;
    cursor: pointer;
  }
  button:hover,
  button:active {
    background-color: #091e4224;
    color: #44546f;
  }
}

#add-table-container {
  padding: 12px;
  padding-top: 0;
  overflow-x: hidden;
  overflow-y: auto;
}
hr {
  background-color: #091e4224;
  border: 0;
  height: 1px;
  margin: 16px 0;
  padding: 0;
  width: 100%;
}
.previsualisation {
  display: flex;
  justify-content: center;
  padding-bottom: 8px;
}
.a {
  background-image: url("../assets/backgroudTableImg/ice.svg");
}
.b {
  background-image: url("../assets/backgroudTableImg/ocean.svg");
}
.c {
  background-image: url("../assets/backgroudTableImg/crystal.svg");
}
.d {
  background-image: url("../assets/backgroudTableImg/rainbow.svg");
}
.e {
  background-image: url("../assets/backgroudTableImg/sun.svg");
}
.f {
  background-image: url("../assets/backgroudTableImg/flower.svg");
}
.g {
  background-image: url("../assets/backgroudTableImg/earth.svg");
}
.h {
  background-image: url("../assets/backgroudTableImg/alien.svg");
}
.i {
  background-image: url("../assets/backgroudTableImg/volcano.svg");
}
.backgroundTableImg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 120px;
  border-radius: 3px;
  background-position: center center;
  background-size: cover;
  box-shadow: 0px 1px 1px #091e4240;
}
p {
  color: #44546f;
  display: block;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  margin-bottom: 4px;
  margin-top: 12px;
}

#grid-select-background {
  display: block;
  padding-bottom: 4px;
  > ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;
    > li {
      width: 100%;
      height: 50px;
      > button {
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        min-height: 0;
        margin: 0;
        padding: 0;
        border-radius: 3px;
        outline: 0;
        border: none;
        background-position: center center;
        background-size: cover;
        box-shadow: none;
        color: #091e420f;
        line-height: 0;
        cursor: pointer;
      }
    }
  }
}
li:nth-child(1) {
  > button {
    background-image: url("../assets/backgroudTableImg/ice.svg");
  }
}
li:nth-child(2) {
  > button {
    background-image: url("../assets/backgroudTableImg/ocean.svg");
  }
}
li:nth-child(3) {
  > button {
    background-image: url("../assets/backgroudTableImg/crystal.svg");
  }
}
li:nth-child(4) {
  > button {
    background-image: url("../assets/backgroudTableImg/rainbow.svg");
  }
}
li:nth-child(5) {
  > button {
    background-image: url("../assets/backgroudTableImg/sun.svg");
  }
}
li:nth-child(6) {
  > button {
    background-image: url("../assets/backgroudTableImg/flower.svg");
  }
}
li:nth-child(7) {
  > button {
    background-image: url("../assets/backgroudTableImg/earth.svg");
  }
}
li:nth-child(8) {
  > button {
    background-image: url("../assets/backgroudTableImg/alien.svg");
  }
}
li:nth-child(9) {
  > button {
    background-image: url("../assets/backgroudTableImg/volcano.svg");
  }
}

#form-add-table {
  > button {
    width: 100%;
    margin: 16px 0 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    font-display: swap;
    display: inline-flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    padding: 6px 12px;
    border-radius: 3px;
    text-decoration: none;
    white-space: normal;
    cursor: pointer;
    border: none;
    background-color: var(--ds-background-brand-bold, #0c66e4);
    box-shadow: none;
    color: var(--ds-text-inverse, #ffffff);
    font-weight: 500;
    transition-property: background-color, border-color, box-shadow;
    transition-duration: 85ms;
    transition-timing-function: ease;
  }
  > button:disabled {
    border: none;
    background-color: var(--ds-background-disabled, #091e4208);
    box-shadow: none;
    color: var(--ds-text-disabled, #091e424f);
    cursor: not-allowed;
  }
}
#title-table {
  color: #44546f;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  margin-top: 12px;
  margin-bottom: 2px;
}
.red {
  color: #e34935;
  margin-left: 2px;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
}
input {
  border: none;
  outline: none;
  color: #172b4d;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  font-display: swap;
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;
  padding: 8px 12px;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: inset 0 0 0 1px #091e4224;
  width: 100%;
  margin-bottom: 4px;
}
#input-empty {
  display: flex;
  flex-direction: row;
  color: #172b4d;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  > p {
    margin: 0 0 8px;
  }
  > span {
    margin-right: 8px;
  }
}
</style>
