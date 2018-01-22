<template>
  <div class="award-component">
    <div v-bind:class="imageClass">
      <img v-bind:src="'src/assets/images/awards/' + type + '.png'" />
    </div>
    <div v-html="prize" class="award__prize">{{ prize }}</div>
  </div>
</template>

<script>

  export default {
    name: 'AwardComponent',
    props: ['type', 'prize'],
    data () {
      return {
        msg: 'Award Component'
      }
    },
    computed: {
      imageClass: function () {
        return 'award__image award__image--' + this.type
      }
    }
  }

</script>

<style lang="scss">

  .award-component {
    width: 70px;
    margin-top: 1.2em;
  }

  .award__image {
    background-size: 100% auto;

    img {
      width: 100%;
    }
  }
  .award__prize {
    font-size: 0.5em;
    text-transform: uppercase;
    text-align: center;
  }

</style>
