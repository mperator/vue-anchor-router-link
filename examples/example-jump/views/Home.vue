<template>
  <div class="home">
    <div id="top" class="block"/>
    <anchor-router-link :to="{name: 'home', hash: '#bottom'}">To Bottom</anchor-router-link>

    <h1>Demo - Route to anchor point with jump animation</h1>
    <h2>Instructions:</h2>
    <ul>
      <li>Make sure no #anchor-point is appended in the URL</li>
      <li>Press "To Bottom" link to go to page bottom</li>
      <li>Check if URL has appended #bottom anchor point</li>
      <li>Scroll up to top page without pressing the "To Top" link!</li>
      <li>Press "To Bottom" link to go to page bottom - if page scrolls down everything works correctly</li>
    </ul>

    <div class="separator"/>

    <anchor-router-link :to="{name: 'home', hash: '#top'}">To Top</anchor-router-link>
    <div id="bottom" class="block"/>
  </div>
</template>

<script>
import AnchorRouterLink from "@/components/VueAnchorRouterLink.vue";

export default {
  name: "home",
  components: {
    AnchorRouterLink
  }
};
</script>

<style scoped>
.separator {
  height: 3000px;
}

.block {
  background: #42b983;
  width: 100%;
  height: 50px;
}

</style>