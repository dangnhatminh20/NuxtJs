import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _385528ae = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _c51244ae = () => interopDefault(import('../pages/users.vue' /* webpackChunkName: "pages/users" */))
const _67b85b1e = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _8a11366a = () => interopDefault(import('../pages/auth/register.vue' /* webpackChunkName: "pages/auth/register" */))
const _1cb6d448 = () => interopDefault(import('../pages/question/list.vue' /* webpackChunkName: "pages/question/list" */))
const _db4b0600 = () => interopDefault(import('../pages/question/_id.vue' /* webpackChunkName: "pages/question/_id" */))
const _580d0373 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _385528ae,
    name: "about"
  }, {
    path: "/users",
    component: _c51244ae,
    name: "users"
  }, {
    path: "/auth/login",
    component: _67b85b1e,
    name: "auth-login"
  }, {
    path: "/auth/register",
    component: _8a11366a,
    name: "auth-register"
  }, {
    path: "/question/list",
    component: _1cb6d448,
    name: "question-list"
  }, {
    path: "/question/:id?",
    component: _db4b0600,
    name: "question-id"
  }, {
    path: "/",
    component: _580d0373,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
