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
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'ProjectComponent',
    props: ['name', 'description', 'imageSrc'],
    data () {
      return {
        msg: 'Project Component'
      }
    }
  }

</script>

<style lang="scss">

  .project-component {
    text-align: left;
    margin-bottom: 10em;
    position: relative;
  }
  .project__image-wrapper {
    height: auto;
    width: 100%;
    background-color: black;
    display: block;
    text-align: center;
    position: relative;
    padding:  0.5em 0;

    img {
      height: 100%;
      width: 80%;
      display: block;
      margin: 0 auto;
    }
  }
  .project__text-wrapper {
    display: block;
    position: relative;
  }

  .project__text-content {
    width: 80%;
    min-height: 200px;
    margin: 0 auto;
    display: block;

    h2 {
      font-size: 4em;
      margin-bottom: 0.2em;
      display: inline-block;
    }

    p {
      width: 80%;
    }
  }

  .project__bg {
    width: 100%;
    position: absolute;
    top: 0;
    display: block;
    /* background-color: aqua; */
    z-index: -1;

    svg {
      width: 100%;
      height: auto;
      fill: #f0f0f0;
    }
  }

</style>
