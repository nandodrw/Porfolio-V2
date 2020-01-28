<template>
  <div id="app" class="full-container">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark-text);
}

.full-container {
  height: 100vh;
  width: 100vw;
}

body {
  margin: 0;
}
</style>
