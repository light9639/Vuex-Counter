# ⚗️ Vuex를 이용하여 만든 counter 예제입니다.
:octocat: https://light9639.github.io/Vuex-Counter/

![light9639 github io_Vuex-Counter_](https://user-images.githubusercontent.com/95972251/212824098-742b477f-c347-4475-ad3a-c7d42462c029.png)

:sparkles: Vuex를 이용하여 만든 counter 예제입니다. :sparkles:
## :tada: Vue 생성
- Vue-Cli가 없다면 터미널에서 다음 명령어로 설치해야 함.
```bash
npm install -g @vue/cli
# or
yarn global add @vue/cli
```

- Vue 프로젝트 생성
```bash
vue create [project-name]
```

- vite를 이용하여 프로젝트를 생성하려면
```bash
npm create vite@latest
# or
yarn create vite
```
- 터미널에서 실행 후 프로젝트 이름 선택 후 Vue 선택, javascirpt 선택하면 생성 완료.
## 🛸 Vuex 설치
- Vuex 설치 명령어
```bash
npm install vuex
# or
yarn add vuex
```

- fetch 함수 대신 axios를 사용하고 싶다면
```bash
npm install axios
# or
yarn add axios
```

## ✒️ main.js, store.js, App.vue, HelloWorld.vue 수정 및작성
### :zap: main.js
- main.js에 store 파일 import하고, use(store)로 연결하기
```js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store/store'

createApp(App).use(store).mount('#app')
```
### :zap: store.js
- axios를 import 하고 `yarn add vuex-persistedstate`로 vuex-persist 설치 후 plugin을 작성하면 로컬스토리지에 vuex 자료가 자동으로 저장됨.
```js
import { createStore } from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    state() {
        return {
            value: 0,
            more: {},
        }
    },
    plugins: [
        createPersistedState({
            // 여기에 적은 state 값만 저장됨
            paths: ["value"],
        })
    ],
    mutations: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        },
        resetValue(state) {
            state.value = 0;
        },
        AnyIncrement(state, data) {
            state.value += data;
        },
        setMore(state, data) {
            state.more = data;
        }
    },
    actions: {
        getData(context) {
            setTimeout(() => {
                axios.get('https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Shoes.json').then((a) => {
                    console.log(a.data.ShopAll);
                    context.commit('setMore', a.data.ShopAll)
                })
            }, 500)
        }
    }
})

export default store
```
### :zap: App.vue
```js
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
```
### :zap: HelloWorld.vue
- mapState, mapMutations, mapActions를 이용하여 vuex 실행 코드를 단축하였음.
- watch 함수를 사용하여 InputData가 숫자가 아닐 경우 경고창 실행 후 값을 0으로 만들도록 작성하였음.
```js
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
```
## 📎 출처
- <a href="https://vuex.vuejs.org/">Vuex 공식 홈페이지</a> 문서를 토대로 구현했습니다.
