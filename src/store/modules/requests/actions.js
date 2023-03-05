export default {
    async contactTeacher(context, payload){
        const newRequest = {
            // id: new Date().toISOString,
            // teacherId: payload.teacherId,
            userEmail: payload.email,
            message: payload.message,
        };
            // send http request to firebase
        const response = await fetch(`https://teacher-finder-app-5fba7-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.teacherId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest),
        });
        const responseData = await response.json();

        if(!response.ok){
            // error hamdling 
            const error = new Error(responseData.message || 'Failed to send request');
            throw error;
        }

        newRequest.id = responseData.name;
        newRequest.teacherId = payload.teacherId

        context.commit('addRequest', newRequest); // (mutation, payload)
    },
    async fetchRequests(context){
        const teacherId = context.rootGetters.userId;
        const response = await fetch(`https://teacher-finder-app-5fba7-default-rtdb.europe-west1.firebasedatabase.app/requests/${teacherId}.json`);
        const responseData = await response.json();

        if(!response.ok){
            // error hamdling 
            const error = new Error(responseData.message || 'Failed to fetch request');
            throw error;
        }
    }    
};