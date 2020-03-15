import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/Counter'
import user from './modules/User'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        counter,
        user,
    },
    strict: debug,
    plugins: []
})
