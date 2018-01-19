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
                type: 'addy',
                prize: 'National <br/>Winner'
              },
              {
                type: 'addy',
                prize: 'Gold District <br/>Winner'
              },
              {
                type: 'awwwards',
                prize: 'Site <br/>of the Day'
              },
              {
                type: 'csswinner',
                prize: 'Website <br/>of the Year'
              },
              {
                type: 'csswinner',
                prize: 'Website <br/>of the Day'
              },
              {
                type: 'fwa',
                prize: 'Site <br/>of the Day'
              },
              {
                type: 'sxsw',
                prize: 'People’s Choice Award'
              }
            ]
          },
          {
            name: 'Morgans Hotel Group',
            description: '<ul><li>Browserify</li><li>http://morganshotelgroup.com</li><li>Awards</li></ul><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis dapibus felis, at convallis ex porta eu. Integer efficitur est sit amet velit elementum elementum. Vestibulum erat augue, mollis vel dignissim in, accumsan in sem. Donec pellentesque augue ligula.',
            imageSrc: 'morgans.png',
            awards: [
              {
                type: 'fitc',
                prize: 'Best Usability'
              }
            ]
          },
          {
            name: 'Aldo Shoe Paradise',
            description: '<ul><li>Flash/AS3</li><li>https://vimeo.com/54040031</li></ul><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis dapibus felis, at convallis ex porta eu. Integer efficitur est sit amet velit elementum elementum. Vestibulum erat augue, mollis vel dignissim in, accumsan in sem. Donec pellentesque augue ligula.',
            imageSrc: 'aldo.jpg',
            awards: [
              {
                type: 'fwa',
                prize: 'Site of the Day'
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
