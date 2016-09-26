<template>
  <div id="app">
    <router-link :to="{ name: 'home' }">Go to /</router-link>
    <router-link :to="{ name: 'about' }">Go to /about</router-link>
    <router-link :to="{ name: 'counter' }">Go to /counter</router-link>
    <router-view></router-view>
    <footer>ⱱμ∈js</footer>
  </div>
</template>

<script>
// vuex doesn't persist the state over document reloads
window.onbeforeunload = _ => false;
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
