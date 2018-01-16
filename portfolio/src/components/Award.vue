<template>
  <div class="award-component">
    <div class="award__image">{{ type }}</div>
    <div class="award__prize">{{ prize }}</div>
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
    }
  }

</script>

<style lang="scss">

  .award-component {
    border: 1px solid red;
    width: 100px;
    height: 100px;
  }

</style>
