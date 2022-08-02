import { createStore } from "vuex";
 const store = createStore({
    state() {
        return {
            logined: false,
            userInfo: {},
            menuVisible:false
        }
    },
    getters: {
        logined: (state) => {
            return state.logined
        },
        userInfo: (state) => {
            return state.userInfo
        },
        menuVisible:(state)=>{
            return state.menuVisible
        }
    },
    mutations: {
        setLogin: (state, val) => {
            state.logined = val
        },
        updateUserInfo: (state, data) => {
            return state.userInfo = data
        },
        menuChange:(state,flag)=>{
            return state.menuVisible = flag
        }
    }
})
export default store