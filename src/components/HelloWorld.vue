<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="card">
      <h2>Value : {{ value }}</h2>
      <div>
        <button type="button" @click="increment()">count +1</button>
        <button type="button" @click="decrement()">count -1</button>
        <button type="button" @click="resetValue()">Reset</button>
      </div>
      <div>
        <input class="InputStyle" type="text" v-model="InputData">
        <button type="button" @click="AnyIncrement(parseInt(InputData))">count + {{ InputData }}</button>
      </div>
      <div>
        <p v-for="(Array, idx) in more" :key="idx">{{ more[idx].name }}</p>
        <button type="button" @click="getData()">getData</button>
      </div>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>
    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
        >create-vue</a
      >, the official Vue + Vite starter
    </p>
    <p>
      Install
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  name: 'HelloWorld',
  data() {
    return {
      InputData: 0
    }
  },
  props: {
    msg: String
  },
  computed: {
    ...mapState(['value', 'more'])
  },
  methods: {
    ...mapMutations(['increment', 'decrement', 'AnyIncrement', 'resetValue', 'setMore']),
    ...mapActions(['getData'])
  },
  watch: {
    InputData(number) {
      if (isNaN(number) == true) {
        alert('숫자만 입력하세요!');
        this.InputData = 0;
      }
    }
  }
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}

.InputStyle {
  padding: 5px 12.5px;
}
</style>
