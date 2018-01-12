<template>
  <div class="portfolio-view">
    <h1>Portfolio View</h1>

    <div v-for="project in projects">
      <project-component
        v-bind:name="project.name"
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
        msg: 'Portfolio View',
        projects: [
          {
            name: 'Mountain Dew — Dewcision 2016',
            imageSrc: 'dewcision.jpg'
          },
          {
            name: 'Project Two',
            imageSrc: 'dewcision.jpg'
          }
        ]
      }
    },
    components: {
      ProjectComponent
    }
  }
</script>
