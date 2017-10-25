<template>
  <div id="app">
    <router-view></router-view>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
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