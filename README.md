# vue-anchor-router-link

> Workaround for VueRouter issue #1668 of https://github.com/vuejs/vue-router/issues/1668. 

## Project usage
Import AnchorRouterLink from packages and add it to components. Check out the project examples.

``` js
import AnchorRouterLink from 'vue-anchor-router-link'

...
components: {
    AnchorRouterLink
}
...

```

Use VueAnchorRouterLink to route to an html anchor tag. Use the additional scrollOptions to create a scroll animation. Make sure you implement the same scroll settings like in the VueRouter scrollBehavior function. Leave empty to jump directly to hash.

### Jump animation
Scrolls to anchor tag with jump animation.
``` html
<anchor-router-link :to="{name: 'Page1', hash: '#start'}">To Start</anchor-router-link>
```

### Scroll Animation
Scrolls to anchor tag with scroll animation.
``` html
<anchor-router-link 
    :to="{name: 'Page2', hash: '#start'}" 
    :scrollOptions="{
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
      }">To Start</anchor-router-link>
```

For more details on scroll animation see: [https://rigor789.github.io/vue-scrollto/#/docs](https://rigor789.github.io/vue-scrollto/#/docs)

## Project setup
``` bash
npm install
```

### Compiles and hot-reloads for exampless

``` bash
# Example 1 (jump animation):
npm run serve-example1

# Example 2 (scroll animation):
npm run serve-example1
```

### Lints and fixes files
```
npm run lint
```