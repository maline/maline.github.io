<template>
  <div id="app">
    <div class="wrapper">
      <h1>{{ msg }}</h1>

      <router-link to="/home">Home</router-link>
      <router-link to="/portfolio">Portfolio</router-link>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Malin Enestrom'
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    text-align: center;
    overflow: auto;
  }

  body {
    margin: 0;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: disc;
    padding: 0;
    width: 50%;
    margin: 20px auto;
    display: inline-block;
  }

  li {
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .wrapper {
    width: 100%;
    margin: 0 auto;
    display: inline-block;
  }
</style>
