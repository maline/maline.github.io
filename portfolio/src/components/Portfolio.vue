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
            description: 'For Mountain Dew’s Dewcision 2016 campaign, where the American people could vote for their favorite discontinued Mountain Dew flavor to return to store shelves, Firstborn created a fun and engaging voting experience. Leading front-end development, I used React and Redux to create a responsive, graphically stunning and modular website, while also assuring high performance integrating with an AWS back-end for real-time vote tallying and user-submitted content.',
            imageSrc: 'dewcision.jpg'
          },
          {
            name: 'Clash of Clans.com',
            description: 'For Supercell, Firstborn developed <a href="https://clashofclans.com/" target="_blank">ClashOfClans.com</a>, using a React front-end – we created a responsive, component-based web and blogging platform to support the millions of Clash of Clans fans who came to the website for the latest news and aggregated, game-related statistics.',
            imageSrc: 'clashofclans.png'
          },
          {
            name: 'HBO Connect',
            description: 'In 2015, Firstborn completely reimagined the HBO Connect platform, a place for fans to connect with shows, collect points and receive show-related rewards and unique perks – fueled by social media, using third party integration of curated Twitter and Instagram feeds. With a Laravel PHP back-end, the front-end used Blade templates together with JavaScript and CSS to create a fully responsive and completely component based experience.',
            imageSrc: 'hbo.png'
          },
          {
            name: 'Aflac.com',
            description: 'Firstborn was hired to redesign <a href="https://www.aflac.com/" target="_blank">Aflac.com</a>, the main source of information for the largest provider of supplemental insurance in the United States. Building the front-end with custom vanilla JavaScript, Browserify and Handlebars templates, we provided responsive components to be easily integrated with an already existing back-end.',
            imageSrc: 'aflac.png'
          },
          {
            name: 'PSCU – Make Your Money Matter',
            description: 'To help PSCU, the largest credit union service organization in the United States, illustrate the benefits of credit unions, Firstborn created an animated story following a deposit at a bank and back into the community. Using JavaScript, CSS and many, many SVG animations, we created a parallax experience, engaging the user, as they scroll through the site. The campaign has won several international awards, including Best Website for Educational Resources at SXSW Interactive Festival. See how you can make your money matter <a href="http://makeyourmoneymatter.org/" target="_blank">here</a>.',
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
            description: 'For Morgans Hotel Group, Firstborn created a brand new platform for their collection of boutique hotels, highlighting a seamless booking flow, and detailed hotel information. My part as a front-end developer focused on building reusable components with a sleek user interface, and creating highlight features like curated maps, that provide interactive guides to top attractions, customized by leveraging the Google Maps API. The website was awarded Best Usibility by FITC in 2014. Book a room at <a href="https://www.morganshotelgroup.com/" target="_blank">morganshotelgroup.com</a>!',
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
            description: 'In 2012, Kokokaka partnered with agency Vitro to create a branded competition for Aldo Shoes, incorporating imagery by photographer Terry Richardson. As Lead Developer, I worked closely with the motion and sound studios to merge Flash animation, video and music together in an immersive in-browser game. Our game was awarded an <a href="https://thefwa.com/cases/aldo-shoes-for-life-gcm" target="_blank">FWA Site of the Day award</a> on June 14, 2012. Check out the project <a href="https://vimeo.com/54040031" target="_blank">here</a>.',
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
