import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _10db7ede = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _75fd33d9 = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages_users" */))
const _5b4f485c = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages_auth_login" */))
const _5293586c = () => interopDefault(import('..\\pages\\auth\\register.vue' /* webpackChunkName: "pages_auth_register" */))
const _276f5d03 = () => interopDefault(import('..\\pages\\question\\list.vue' /* webpackChunkName: "pages_question_list" */))
const _486070e5 = () => interopDefault(import('..\\pages\\question\\_id.vue' /* webpackChunkName: "pages_question__id" */))
const _309359a3 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
