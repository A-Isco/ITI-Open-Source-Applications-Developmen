<template>
  <navBarApp/>
  <router-view></router-view>
</template>

<script>
import navBarApp from './components/navbar.vue' 

export default {
  name: 'App',
  components: {
    navBarApp,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
