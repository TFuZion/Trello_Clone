<script setup></script>

<template>
  <section id="filter-card-container">
    <header>
      <h5>Filtre</h5>
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
    <div id="filter-card-main">
      <p id="key-word">Mot-clé</p>
      <div>
        <input type="text" placeholder="Saisissez un mot-clé..." />
      </div>
      <p id="infos-input">
        Recherchez des cartes, des membres, des étiquettes et plus encore.
      </p>
    </div>
  </section>
</template>

<style scoped>
#filter-card-container {
  display: block;
  position: fixed;
  inset: 136px auto auto 57px;
  width: 384px;
  color: #172b4d;
  font-family: "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans",
    "Helvetica Neue", sans-serif;
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
#filter-card-main {
  max-height: 1104px;
  padding: 12px;
  padding-top: 0;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

#key-word {
  color: #44546f;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 8px;
}
#infos-input {
  margin-top: 8px;
  margin-bottom: 4px;
  color: #44546f;
  font-size: 11px;
  line-height: 14px;
}
input {
  box-sizing: border-box;
  border: none;
  outline: none;
  color: #172b4d;
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
  margin-bottom: 0;
}
input:hover {
  background-color: #f7f8f9;
  box-shadow: inset 0 0 0 1px #091e4224;
}
input:focus {
  background-color: #ffffff;
  box-shadow: inset 0 0 0 2px #388bff;
}
</style>
