import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _02886a8a = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _35e69f2d = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _3e14d5c0 = () => interopDefault(import('..\\pages\\home-two.vue' /* webpackChunkName: "pages/home-two" */))
const _06fbdec7 = () => interopDefault(import('..\\pages\\project.vue' /* webpackChunkName: "pages/project" */))
const _67dfa73a = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _1e73a580 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _02886a8a,
    name: "about"
  }, {
    path: "/contact-us",
    component: _35e69f2d,
    name: "contact-us"
  }, {
    path: "/home-two",
    component: _3e14d5c0,
    name: "home-two"
  }, {
    path: "/project",
    component: _06fbdec7,
    name: "project"
  }, {
    path: "/service",
    component: _67dfa73a,
    name: "service"
  }, {
    path: "/",
    component: _1e73a580,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  const router = new Router(routerOptions)
  const resolve = router.resolve.bind(router)

  // encodeURI(decodeURI()) ~> support both encoded and non-encoded urls
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = encodeURI(decodeURI(to))
    }
    return resolve(to, current, append)
  }

  return router
}
