<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis dapibus felis, at convallis ex porta eu. Integer efficitur est sit amet velit elementum elementum. Vestibulum erat augue, mollis vel dignissim in, accumsan in sem. Donec pellentesque augue ligula. Sed gravida leo id purus fringilla, sed consectetur enim gravida. Duis tincidunt, mauris id faucibus mollis, quam mauris ultricies turpis, eget bibendum arcu nisi nec ligula. Nulla facilisi. Pellentesque sollicitudin vitae enim varius efficitur. Sed blandit non erat et sodales. Donec ornare fringilla eros, sit amet efficitur libero tincidunt ut. Maecenas in enim eu metus rutrum gravida. Praesent congue maximus nisl, sit amet bibendum dolor ornare et. Integer placerat lobortis magna, sit amet molestie erat tempus quis.</p>

    <router-link to="/home">Home</router-link>
    <router-link to="/portfolio">Portfolio</router-link>

    <router-view></router-view>
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
  }

  h1, h2 {
    font-weight: normal;
    text-align: center;
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
</style>
