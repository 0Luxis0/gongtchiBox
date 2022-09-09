<template>
  <div class="main">
    <img alt="Vue logo" src="./assets/logo.png">
    <ImportFile msg="upstuff"/>
  </div>
</template>

<script>
import ImportFile from './components/ImportFile.vue'

export default {
  name: 'App',
  components: {
    ImportFile
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111;
}
.main{
  opacity: 2;
}
</style>
