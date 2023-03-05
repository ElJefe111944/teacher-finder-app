export default {
    requests(state){
        // return list of requests
        return state.requests;
    },
    hasRequests(state){
        // check to verify that requets array isnt empty
        return state.requests && state.requests.length > 0;
    },
};