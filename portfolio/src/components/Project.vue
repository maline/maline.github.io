<template>
  <div class="project-component">
    <h2>{{name}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'ProjectComponent',
    props: ['name'],
    data () {
      return {
        msg: 'Project Component'
      }
    }
  }
</script>
