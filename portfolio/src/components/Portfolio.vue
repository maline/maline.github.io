<template>
  <div class="portfolio-view">
    <h1>Portfolio View</h1>

    <ul>
      <li v-for="project in projects">
        <project-component v-bind:name="project.name"></project-component>
      </li>
    </ul>


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
            name: 'Project One'
          },
          {
            name: 'Project Two'
          }
        ]
      }
    },
    components: {
      ProjectComponent
    }
  }
</script>
