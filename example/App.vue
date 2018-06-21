<template>
  <div id="app">
    <anchor-router-link />
  </div>
</template>

<script>
import AnchorRouterLink from '../src/components/VueAnchorRouterLink'

export default {
  name: 'App',
  components: {
    AnchorRouterLink
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
