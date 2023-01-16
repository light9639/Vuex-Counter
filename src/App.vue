<template>
  <div>
    <div>
      <a href="https://vuejs.org/" target="_blank">
        <img src="https://raw.githubusercontent.com/light9639/light9639/main/Icon%20Img/Vuex.png" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vuex Counter" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.logo {
  height: 9rem;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
