<template>
  <div class="portfolio-view">
    <div v-for="project in projects" class="portfolio-wrapper">
      <project-component
        v-bind:name="project.name"
        v-bind:description="project.description"
        v-bind:imageSrc="project.imageSrc"
        v-bind:awards="project.awards"></project-component>
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
            description: '<ul><li>React</li><li>Redux</li></ul><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis dapibus felis, at convallis ex porta eu. Integer efficitur est sit amet velit elementum elementum. Vestibulum erat augue, mollis vel dignissim in, accumsan in sem. Donec pellentesque augue ligula.',
            imageSrc: 'dewcision.jpg'
          },
          {
            name: 'Clash of Clans.com',
            description: '<ul><li>React</li><li>Flux pattern</li></ul><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis dapibus felis, at convallis ex porta eu. Integer efficitur est sit amet velit elementum elementum. Vestibulum erat augue, mollis vel dignissim in, accumsan in sem. Donec pellentesque augue ligula.',
            imageSrc: 'clashofclans.png'
          },
          {
            name: 'HBO Connect',
            description: '<ul><li>Browserify</li><li>Responsive</li><li>Component based</li></ul><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis dapibus felis, at convallis ex porta eu. Integer efficitur est sit amet velit elementum elementum. Vestibulum erat augue, mollis vel dignissim in, accumsan in sem. Donec pellentesque augue ligula.',
            imageSrc: 'hbo.png'
          },
          {
            name: 'Aflac.com',
            description: '<ul><li>Browserify</li></ul><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis dapibus felis, at convallis ex porta eu. Integer efficitur est sit amet velit elementum elementum. Vestibulum erat augue, mollis vel dignissim in, accumsan in sem. Donec pellentesque augue ligula.',
            imageSrc: 'aflac.png'
          },
          {
            name: 'PSCU – Make Your Money Matter',
            description: '<ul><li>Browserify</li><li>SVG animations</li><li>http://makeyourmoneymatter.org/</li><li>Awards</li></ul><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis dapibus felis, at convallis ex porta eu. Integer efficitur est sit amet velit elementum elementum. Vestibulum erat augue, mollis vel dignissim in, accumsan in sem. Donec pellentesque augue ligula.',
            imageSrc: 'pscu.png',
            awards: [
              {
                type: 'awwwards',
                prize: 'Site of the Day'
              },
              {
                type: 'addy',
                prize: 'National Winner'
              },
              {
                type: 'addy',
                prize: 'Gold District Winner'
              },
              {
                type: 'csswinner',
                prize: 'Website of the Year'
              },
              {
                type: 'csswinner',
                prize: 'Website of the Day'
              }
            ]
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
