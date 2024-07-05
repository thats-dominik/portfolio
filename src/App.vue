<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import './assets/fonts.css';

body, html {
  margin: 0;
  padding: 0;
  background-color: #C3AC9F;
  font-family: 'Raleway', sans-serif;
}

#app {
  color: #2c3e50;
}
</style>
