<template>
  <div id="app">
    {{msg}}
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({
    name: "Apps"
  })
  export default class App extends Vue {
    msg: string = "First TypeScript Vue App"
  }
</script>