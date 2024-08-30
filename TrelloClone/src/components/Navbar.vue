<script setup>
import { ref } from "vue";

const dynamicBackgroundNavbar = ref("a");
const tableName = ref("Mon Tableau Trello");
const toggleTitleTable = ref(false);
</script>

<template>
  <section id="navbar" :class="dynamicBackgroundNavbar">
    <div id="navbar-container">
      <header>
        <h2
          v-if="!toggleTitleTable"
          @click="toggleTitleTable = !toggleTitleTable"
        >
          {{ tableName }}
        </h2>
        <input v-else="toggleTitleTable" type="text" :value="nameTable" v-bind="nameTable"/>
      </header>
    </div>
  </section>
</template>

<style scoped>
.a,
.b {
  background-color: hsla(215, 90%, 37.7%, 0.9);
}
.c {
  background-color: hsla(215, 84.6%, 22.9%, 0.9);
}
.d {
  background-color: hsla(250, 47.9%, 45.7%, 0.9);
}
.e {
  background-color: hsla(7, 75.7%, 35.1%, 0.9);
}
.f {
  background-color: hsla(323, 70.6%, 34.8%, 0.9);
}
.g {
  background-color: hsla(155, 62%, 25.6%, 0.9);
}
.h {
  background-color: hsla(218, 20.4%, 39.4%, 0.9);
}
.i {
  background-color: hsla(30, 63.4%, 16.1%, 0.9);
}

#navbar {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 260px;
  font-family: 'Segoe UI', 'Roboto', 'Noto Sans', 'Ubuntu', 'Droid Sans', 'Helvetica Neue', sans-serif;
}
#navbar-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
  backdrop-filter: blur(6px);
  > header {
    display: flex;
    align-items: center;
    min-height: 40px;
    padding: 8px 12px 8px;
    border-bottom: 1px solid white;
    > h2 {
      height: 100%;
      width: 100%;
      display: flex;
      margin: 15px 0;
      text-align: center;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      color: #ffffff;
      font-size: 1.5rem;
      font-weight: bold;
      text-decoration: none;
      border-radius: 5px;
    }
    > h2:hover {
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.2);
    }
    > input {
      height: 100%;
      width: 100%;
      border-radius: 5px;
      margin: 15px 0;
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      border: none;
      background-color: #ffffff;
      font-size: 18px;
      font-weight: bold;
      box-shadow: inset 0 0 0 2px #388bff;
    }
    > input:focus {
      border: none ;
    }
  }
}
</style>
