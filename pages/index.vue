<template>
  <div class="container">
    <div class="intro_nuxt">
      <logo />
      <h1 class="title">
        b12pro
      </h1>
      <h2 class="subtitle">
        My superb Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    <div class="main_menu">
        <div class="container">
          <h1>Home page</h1>
          <p>
            <NuxtLink to="/question/list">
              Lists Question
            </NuxtLink>
          </p>
          <p>
            <NuxtLink to="/question/_id">
              Question {{_id}}
            </NuxtLink>
          </p>
          <p>
            <nuxtLink to="/auth/login">
                Login
            </nuxtLink>
          </p>
          <p>
            <nuxtLink to="/auth/login">
                Register
            </nuxtLink>
          </p>
        </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  //middleware: 'auth'
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex; 
  justify-content: center;
  flex-flow: column;
  align-items: center;
  text-align: center;
}

.intro_nuxt {
  
}

.main_menu .container{
  padding: 0;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
