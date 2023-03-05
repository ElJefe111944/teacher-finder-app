export default {
    requests(state, _, _2, rootGetters){
        const teacherId = rootGetters.userId;
        // return list of requests
        return state.requests.filter(req => req.teacherId === teacherId);
    },
    hasRequests(_, getters){
        // check to verify that requets array isnt empty
        return getters.requests && getters.requests.length > 0;
    },
};