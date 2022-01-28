import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e10106e8 = () => interopDefault(import('..\\pages\\admin.vue' /* webpackChunkName: "pages/admin" */))
const _777b6f2c = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _73491a8e = () => interopDefault(import('..\\pages\\blog-one.vue' /* webpackChunkName: "pages/blog-one" */))
const _2e33bef3 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _fe740ece = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _0bf8d79d = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _7b3da6e0 = () => interopDefault(import('..\\pages\\diction-three.vue' /* webpackChunkName: "pages/diction-three" */))
const _5e85c1e4 = () => interopDefault(import('..\\pages\\diction-two.vue' /* webpackChunkName: "pages/diction-two" */))
const _777c8630 = () => interopDefault(import('..\\pages\\gallery-one.vue' /* webpackChunkName: "pages/gallery-one" */))
const _27b7cba6 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _671b3db7 = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages/products" */))
const _1b9b962b = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _096bf93e = () => interopDefault(import('..\\pages\\products-details\\_id.vue' /* webpackChunkName: "pages/products-details/_id" */))
const _5e10288f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _e10106e8,
    name: "admin"
  }, {
    path: "/blog-details",
    component: _777b6f2c,
    name: "blog-details"
  }, {
    path: "/blog-one",
    component: _73491a8e,
    name: "blog-one"
  }, {
    path: "/cart",
    component: _2e33bef3,
    name: "cart"
  }, {
    path: "/checkout",
    component: _fe740ece,
    name: "checkout"
  }, {
    path: "/contact",
    component: _0bf8d79d,
    name: "contact"
  }, {
    path: "/diction-three",
    component: _7b3da6e0,
    name: "diction-three"
  }, {
    path: "/diction-two",
    component: _5e85c1e4,
    name: "diction-two"
  }, {
    path: "/gallery-one",
    component: _777c8630,
    name: "gallery-one"
  }, {
    path: "/login",
    component: _27b7cba6,
    name: "login"
  }, {
    path: "/products",
    component: _671b3db7,
    name: "products"
  }, {
    path: "/signup",
    component: _1b9b962b,
    name: "signup"
  }, {
    path: "/products-details/:id?",
    component: _096bf93e,
    name: "products-details-id"
  }, {
    path: "/",
    component: _5e10288f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
