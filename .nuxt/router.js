import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _391c1bba = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _1168d8c5 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _352af2b0 = () => interopDefault(import('..\\pages\\event.vue' /* webpackChunkName: "pages/event" */))
const _33374194 = () => interopDefault(import('..\\pages\\fia.vue' /* webpackChunkName: "pages/fia" */))
const _9d362860 = () => interopDefault(import('..\\pages\\focodevv.vue' /* webpackChunkName: "pages/focodevv" */))
const _4a6954b8 = () => interopDefault(import('..\\pages\\home-two.vue' /* webpackChunkName: "pages/home-two" */))
const _d27467a2 = () => interopDefault(import('..\\pages\\project.vue' /* webpackChunkName: "pages/project" */))
const _5bda19cb = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _0329cce8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _391c1bba,
    name: "about"
  }, {
    path: "/contact-us",
    component: _1168d8c5,
    name: "contact-us"
  }, {
    path: "/event",
    component: _352af2b0,
    name: "event"
  }, {
    path: "/fia",
    component: _33374194,
    name: "fia"
  }, {
    path: "/focodevv",
    component: _9d362860,
    name: "focodevv"
  }, {
    path: "/home-two",
    component: _4a6954b8,
    name: "home-two"
  }, {
    path: "/project",
    component: _d27467a2,
    name: "project"
  }, {
    path: "/service",
    component: _5bda19cb,
    name: "service"
  }, {
    path: "/",
    component: _0329cce8,
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
