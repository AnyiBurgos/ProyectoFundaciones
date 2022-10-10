<template>
  <NavBar msg=''/>
  <LoginProject/>
  <FundacionesProject/>
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue';


export default {
  name: 'App',
  components: {
    NavBar,
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

#app {  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10%;
}
</style>
