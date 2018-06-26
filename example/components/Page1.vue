<template>
    <div id="page1">
    <div id="start">Start</div>
    <h2>Page 1</h2>
    <h3>Direct scrolling (jump). To test scroll down and press link 'To Start' then the scroll down and press again.</h3>
    
    <anchor-router-link :to="{name: 'Page1', hash: '#end'}">To End</anchor-router-link>

    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>

    <anchor-router-link :to="{name: 'Page1', hash: '#start'}">To Start</anchor-router-link>


    <div id="end">End</div>
    </div>
</template>

<script>
import AnchorRouterLink from "../../src/components/VueAnchorRouterLink";

export default {
  name: "Page1",
    components: {
    AnchorRouterLink
  }
};
</script>

<style>
#page1 p {
    margin-top: 500px;
}
</style>
