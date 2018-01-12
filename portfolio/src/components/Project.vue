<template>
  <div class="project-component">

    <div class="project__image-wrapper">
      <img v-bind:src="'assets/images/' + imageSrc" />
    </div>
    <div class="project__text-wrapper">
      <div class="project__bg">
        <svg width="2100" height="554" viewBox="0 0 2100 554">
          <path class="cls-1" d="M-2-.5v552L2099-.5H-2Z"/>
        </svg>
      </div>

      <div class="project__text-content">
        <h2>{{ name }}</h2>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'ProjectComponent',
    props: ['name', 'imageSrc'],
    data () {
      return {
        msg: 'Project Component'
      }
    }
  }

</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Abril+Fatface');

  .project-component {
    text-align: left;
    margin-bottom: 100px;
    position: relative;
  }
  .project__image-wrapper {
    height: auto;
    width: 100%;
    background-color: black;
    display: block;
    text-align: center;
    position: relative;

    img {
      height: 100%;
      width: 80%;
    }
  }
  .project__text-wrapper {
    display:block;
    position: relative;
  }

  .project__text-content {
    width: 80%;
    min-height: 100px;
    max-height: 200px;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    h2 {
      font-family: 'Abril Fatface', cursive;
      font-size: 4em;
    }
  }

  .project__bg {
    /* position: absolute; */
    svg {
      width: 100%;
      height: auto;
      fill: #f0f0f0;
    }
  }

</style>
