import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _10db7ede = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _75fd33d9 = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages_users" */))
const _5b4f485c = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages_auth_login" */))
const _5293586c = () => interopDefault(import('..\\pages\\auth\\register.vue' /* webpackChunkName: "pages_auth_register" */))
const _276f5d03 = () => interopDefault(import('..\\pages\\question\\list.vue' /* webpackChunkName: "pages_question_list" */))
const _486070e5 = () => interopDefault(import('..\\pages\\question\\_id.vue' /* webpackChunkName: "pages_question__id" */))
const _309359a3 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
=======
const _385528ae = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _c51244ae = () => interopDefault(import('../pages/users.vue' /* webpackChunkName: "pages/users" */))
const _67b85b1e = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _8a11366a = () => interopDefault(import('../pages/auth/register.vue' /* webpackChunkName: "pages/auth/register" */))
const _1cb6d448 = () => interopDefault(import('../pages/question/list.vue' /* webpackChunkName: "pages/question/list" */))
const _db4b0600 = () => interopDefault(import('../pages/question/_id.vue' /* webpackChunkName: "pages/question/_id" */))
const _580d0373 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
>>>>>>> 5bf140dc72197e166681783df7a3132a8c2ea79a

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
<<<<<<< HEAD
    component: _10db7ede,
    name: "about"
  }, {
    path: "/users",
    component: _75fd33d9,
    name: "users"
  }, {
    path: "/auth/login",
    component: _5b4f485c,
    name: "auth-login"
  }, {
    path: "/auth/register",
    component: _5293586c,
    name: "auth-register"
  }, {
    path: "/question/list",
    component: _276f5d03,
    name: "question-list"
  }, {
    path: "/question/:id?",
    component: _486070e5,
    name: "question-id"
  }, {
    path: "/",
    component: _309359a3,
=======
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
>>>>>>> 5bf140dc72197e166681783df7a3132a8c2ea79a
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
