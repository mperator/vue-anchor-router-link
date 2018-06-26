# Vue-Anchor-Router-Link

> Workaroud for VueRouter issue #1668 of https://github.com/vuejs/vue-router/issues/1668. 

## Installation

### npms

``` bash
npm install -s vue-anchor-router-link
```

## Usage

``` js
import VueAnchorRouterLink from 'vue-anchor-router-link'

...
components: {
    VueAnchorRouterLink
}
...

```

Use VueAnchorRouterLink to route to an html anchor tag. Use the additional scrollOptions to create a scroll animation. Make sure you implement the same scroll settings like in the VueRouter scrollBehavior function. Leave empty to use scroll directly to hash.

### Default
``` html
<anchor-router-link :to="{name: 'Page1', hash: '#start'}">To Start</anchor-router-link>
```

### With Animation
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


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# build example
npm run build-example
```