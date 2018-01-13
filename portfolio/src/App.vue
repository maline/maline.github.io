<template>
  <div id="app">
    <div class="wrapper">
      <div class="header">
        <h1 class="logo">Malin Eneström</h1>
        <h3 class="subtitle">– Web Developer –</h3>
      </div>

      <!-- <router-link to="/home">Home</router-link>
      <router-link to="/portfolio">Portfolio</router-link> -->
      <!-- <router-view></router-view> -->
      <home-view></home-view>
      <portfolio-view></portfolio-view>
    </div>
  </div>
</template>

<script>
import HomeView from './components/Home'
import PortfolioView from './components/Portfolio'

export default {
  name: 'app',
  components: {
    HomeView,
    PortfolioView
  }
}
</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Open+Sans:300,400');

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
    overflow: auto;
  }

  body {
    margin: 0;
  }

  h1, h2 {
    font-family: 'Abril Fatface', cursive;
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

  p {
    font-family: 'Open Sans', sans-serif;
    font-weight: lighter;
    font-size: 1.1em;
    line-height: 1.6em;
  }

  a {
    /* color: #42b983; */
  }

  .wrapper {
    width: 100%;
    margin: 0 auto;
    display: inline-block;
  }

  .header {
    background-color: #f0f0f0;
    display: inline-block;
    width: 100%;
  }

  .logo {
    color: #e74c3c;
    font-size: 5em;
    margin-bottom: 0;
  }
  .subtitle {
    font-size: 1.25em;
    /* color: #11181f; */
  }
</style>
