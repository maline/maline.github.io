<template>
  <div id="app">
    <div class="wrapper">
      <div class="header">
        <div class="header__bg">
          <svg width="2100" height="554" viewBox="0 0 2100 554">
            <path class="cls-1" d="M-2-.5v552L2099-.5H-2Z"/>
          </svg>
        </div>
        <h1 class="logo">Malin Eneström</h1>
        <h3 class="subtitle">– Web Developer –</h3>
      </div>

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
  @import 'src/assets/scss/global.scss';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $dark-grey;
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
    text-align: left;

    @include device(mobile) {
      font-size: 0.9em;
    }
  }

  a {
    color: $red;
    text-decoration: none;
    font-weight: normal;

    &:hover {
      text-decoration: underline;
    }
  }

  .wrapper {
    width: 100%;
    margin: 0 auto;
    display: inline-block;
    overflow: hidden;
  }

  .header {
    background-color: $light-grey;
    display: inline-block;
    width: 100%;
    position: relative;
  }

  .header__bg {
    width: 100%;
    position: absolute;
    top: 0;
    display: block;

    svg {
      width: 100%;
      height: auto;
      fill: white; // $white;
    }

    @include device(mobile-small) {
      width: 240%;
    }
  }

  .logo {
    color: $red;
    font-size: 5em;
    margin: 0.3em auto 0;
    position: relative;

    @include device(mobile) {
      font-size: 4em;
      line-height: 1em;
    }
  }
  .subtitle {
    font-size: 1.25em;
    position: relative;
    margin: 1.1em auto 1.5em;

    @include device(mobile) {
      margin: 1.1em auto;
    }
  }
</style>
