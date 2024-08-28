<script setup>
import { Form, Field } from "vee-validate";
import { ref } from "vue";

const urlBackgroundTableImg = ["a", "b", "c", "d", "e"];

const classBackgroudTableImg = ref("a");
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
        <div class="backgroundTableImg">
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
            <li><button></button></li>
            <li><button></button></li>
            <li><button></button></li>
            <li><button></button></li>
            <li><button></button></li>
            <li><button></button></li>
            <li><button></button></li>
            <li><button></button></li>
            <li><button></button></li>
          </ul>
        </div>
      </div>
      <Form id="form-add-table">
        <div id="title-table">
          Titre du tableau
          <span class="red">*</span>
        </div>
        <!-- <Field name="tabelName" aria-invalid="false" aria-required="true"/> -->
        <input type="text" />
        <button>Créer</button>
      </Form>
    </div>
  </section>
</template>

<style scoped>
#form-add-table {
  > button {
    width: 100%;
    margin: 16px 0 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Noto Sans', 'Ubuntu', 'Droid Sans', 'Helvetica Neue', sans-serif;
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
    cursor: not-allowed;
    border: none;
    background-color: #091e420f;
    box-shadow: none;
    color: #172b4d;
    font-weight: 500;
    transition-property: background-color, border-color, box-shadow;
    transition-duration: 85ms;
    transition-timing-function: ease;
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

#add-table-container {
  padding: 12px;
  padding-top: 0;
  overflow-x: hidden;
  overflow-y: auto;
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

hr {
  background-color: #091e4224;
  border: 0;
  height: 1px;
  margin: 16px 0;
  padding: 0;
  width: 100%;
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

.previsualisation {
  display: flex;
  justify-content: center;
  padding-bottom: 8px;
}
.backgroundTableImg {
  background-image: url("../assets/backgroudTableImg/ice.svg");
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
}
button {
  grid-column: 3;
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  color: #626f86;
}
</style>
