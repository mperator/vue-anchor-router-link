<template>
    <div id="page2">
    <div id="start">Start</div>
    <h2>Page 2</h2>
    <h3>Animate scrolling. To test scroll down and press link 'To Start' then the scroll down and press again.</h3>

    <anchor-router-link :to="{name: 'Page2', hash: '#end'}" :scrollOptions="scrollOptions">To End</anchor-router-link>

    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>

    <anchor-router-link :to="{name: 'Page2', hash: '#start'}" :scrollOptions="scrollOptions">To Start</anchor-router-link>


    <div id="end">End</div>
    </div>
</template>

<script>
import AnchorRouterLink from "../../src/components/VueAnchorRouterLink";

export default {
  name: "Page2",
  components: {
    AnchorRouterLink
  },
  data() {
    return {
      scrollOptions: {
        container: "body",
        duration: 700,
        easing: "ease",
        offset: 0,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
      }
    };
  }
};
</script>

<style>
#page2 p {
  margin: 500px 0;
}
</style>