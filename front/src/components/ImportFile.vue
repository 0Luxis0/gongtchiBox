
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <input type="file" ref="file" @change="g" webkitdirectory directory accept=".txt">
      <button @click="g">HEPT</button>
    </div>
    <h1>{{resp}}</h1>
  </div>
</template>
<script>
import * as fs from 'fs'
import axios from 'axios'

export default {
  name: 'ImportFile',
  props: {
    msg: String
  },
  data(){
    return {
      fil: [],
      resp: {}
    }
  },
  methods: {
    g(){
  //     fs.rename('hello.txt', 'world.txt', () => {
  // console.log("\nFile Renamed!\n");
  // })
      var xx = this.$refs

      this.fil = xx.file
      console.log(fs)
      axios.get('http://localhost:5000/').then((res) => {
        console.log(res.data)
        this.resp = res.data
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
