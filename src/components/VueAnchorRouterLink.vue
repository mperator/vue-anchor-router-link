<template>
  <router-link @click.native="routeToAnchor" :to="to">
    <slot/>
  </router-link>
</template>

<script>
import Vue from "vue";
import Router from "vue-router";
import VueScrollTo from "vue-scrollto";

Vue.use(Router);
Vue.use(VueScrollTo);

export default {
  name: "vue-anchor-router-link",
  props: {
    to: Object,
    scrollOptions: {
      type: [Object, Number],
      default: 1
    }
  },
  data() {
    return {
      previousRoute: this.$route
    };
  },
  methods: {
    routeToAnchor() {
      // Scrolls manually to anchor if user clicks an routing link but the route has not changed.
      if (this.$route.fullPath === this.previousRoute.fullPath) {
        this.$scrollTo(this.to.hash, this.scrollOptions);
      }
    }
  },
  watch: {
    $route: function(newRoute, oldRoute) {
      this.previousRoute = newRoute;
    }
  }
};
</script>

<style>
</style>
