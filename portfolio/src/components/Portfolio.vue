<template>
  <div class="portfolio-view">
    <div v-for="project in projects" class="portfolio-wrapper">
      <project-component
        v-bind:name="project.name"
        v-bind:description="project.description"
        v-bind:imageSrc="project.imageSrc"></project-component>
    </div>


  </div>
</template>

<script>
  import ProjectComponent from './Project.vue'

  export default {
    name: 'PortfolioView',
    data () {
      return {
        projects: [
          {
            name: 'Mountain Dew — Dewcision 2016',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis dapibus felis, at convallis ex porta eu. Integer efficitur est sit amet velit elementum elementum. Vestibulum erat augue, mollis vel dignissim in, accumsan in sem. Donec pellentesque augue ligula.',
            imageSrc: 'dewcision.jpg'
          },
          {
            name: 'Clash of Clans.com',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis dapibus felis, at convallis ex porta eu. Integer efficitur est sit amet velit elementum elementum. Vestibulum erat augue, mollis vel dignissim in, accumsan in sem. Donec pellentesque augue ligula.',
            imageSrc: 'clashofclans.png'
          },
          {
            name: 'HBO Connect',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis dapibus felis, at convallis ex porta eu. Integer efficitur est sit amet velit elementum elementum. Vestibulum erat augue, mollis vel dignissim in, accumsan in sem. Donec pellentesque augue ligula.',
            imageSrc: 'hbo.png'
          },
          {
            name: 'Aflac.com',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis dapibus felis, at convallis ex porta eu. Integer efficitur est sit amet velit elementum elementum. Vestibulum erat augue, mollis vel dignissim in, accumsan in sem. Donec pellentesque augue ligula.',
            imageSrc: 'aflac.png'
          }
        ]
      }
    },
    components: {
      ProjectComponent
    }
  }
</script>

<style lang="scss">
  .portfolio-wrapper {
    /* margin-top: 5em; */
  }
</style>
