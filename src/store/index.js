import { createStore } from "vuex";

import teachersModule from "./modules/teachers/index.js";
import requestsModule from './modules/requests/index.js'

const store = createStore({
    modules: {
        teachers: teachersModule,
        requests: requestsModule,
    },
    state(){
        return {
            userId: 'c3',
        };
    },
    getters: {
        userId(state){
            return state.userId;
        }
    }
});

export default store;