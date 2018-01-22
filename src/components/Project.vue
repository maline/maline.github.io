<template>
  <div class="project-component">

    <div class="project__image-wrapper">
      <img v-bind:src="'src/assets/images/' + imageSrc" />
    </div>
    <div class="project__text-wrapper">
      <div class="project__bg">
        <svg width="2100" height="554" viewBox="0 0 2100 554">
          <path class="cls-1" d="M-2-.5v552L2099-.5H-2Z"/>
        </svg>
      </div>
      <div class="project__text-content">
        <h2>{{ name }}</h2>
        <p v-html="description">{{ description }}</p>
        <ul v-if="awards" class="project__awards">
          <li v-for="award in awards">
            <award-component
              v-bind:type="award.type"
              v-bind:prize="award.prize"></award-component>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  import AwardComponent from './Award.vue'

  export default {
    name: 'ProjectComponent',
    props: ['name', 'description', 'imageSrc', 'awards'],
    data () {
      return {
        msg: 'Project Component'
      }
    },
    components: {
      AwardComponent
    }
  }

</script>

<style lang="scss">

  .project-component {
    text-align: left;
    padding-bottom: 10em;
    position: relative;

    @include device(mobile) {
      padding-bottom: 2.5em;
    }
  }
  .project__image-wrapper {
    height: auto;
    width: 100%;
    background-color: black;
    display: block;
    text-align: center;
    position: relative;
    padding:  0.5em 0;

    @include device(mobile) {
      padding:  0.25em 0;
    }

    img {
      height: 100%;
      width: 80%;
      display: block;
      margin: 0 auto;

      @include device(mobile) {
        width: 100%;
      }
    }
  }
  .project__text-wrapper {
    display: block;
    position: relative;
    width: 100%;
  }

  .project__text-content {
    width: 80%;
    margin: 0 auto;
    display: block;

    @include device(desktop-large) {
      width: 60%;
    }

    h2 {
      font-size: 4em;
      margin-bottom: 0.2em;
      display: inline-block;

      @include device(mobile) {
        font-size: 2em;
        line-height: 1.1em;
      }
    }
  }

  .project__awards {
    list-style-type: none;
    width: 100%;
    margin: 0;
    text-align: center;

    li {
      display: inline-block;
      float: left;
      margin: 0 1.2em 0 0;
    }
  }

  .project__bg {
    width: 100%;
    position: absolute;
    top: 0;
    display: block;
    z-index: -1;

    svg {
      width: 100%;
      height: auto;
      fill: $light-grey;
    }

    @include device(mobile-small) {
      width: 150%;
    }
  }

</style>
