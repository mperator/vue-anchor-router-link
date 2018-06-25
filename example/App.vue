<template>
  <div id="app">
    <h1>Anchor Router Link Test</h1>
    <router-link :to="{name: 'Page1'}">Page 1</router-link>
    <anchor-router-link :to="{name: 'Page1', hash: '#end'}">Page 1 #end</anchor-router-link >
    
    <router-link :to="{name: 'Page2'}">Page 2</router-link>
    <anchor-router-link :to="{name: 'Page2', hash: '#end'}">Page 2 #end</anchor-router-link >

    <p>
        The VueAnchorRouterLink addresses the missing behavior of scrolling to the same anchor back if the route is already in the address bar.
        See: <a href="https://github.com/vuejs/vue-router/issues/1668">https://github.com/vuejs/vue-router/issues/1668</a>
    </p>

    <p>
        You can configure the scroll behavior by using the options of Vue-ScrollTo.
    </p>

    <router-view />
  </div>
</template>

<script>
import AnchorRouterLink from "../src/components/VueAnchorRouterLink";

export default {
  name: "App",
  components: {
    AnchorRouterLink
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
