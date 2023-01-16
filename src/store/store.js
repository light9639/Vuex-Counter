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