<template>
  <NavBar/>
  <router-view/>
  <FooterProject/>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterProject from './components/FooterProject.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterProject,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 17px;
}

html {
  min-height: 100%;
  position: relative;
}

#app {  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-bottom: 151px;
}
</style>
