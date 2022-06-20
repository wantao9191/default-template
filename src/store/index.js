import { createStore } from "vuex";
 const store = createStore({
    state() {
        return {
            logined: false,
            userInfo: {}
        }
    },
    getters: {
        logined: (state) => {
            return state.logined
        },
        userInfo: (state) => {
            return state.userInfo
        }
    },
    mutations: {
        setLogin: (state, val) => {
            state.logined = val
        },
        updateUserInfo: (state, data) => {
            return state.userInfo = data
        }
    }
})
export default store