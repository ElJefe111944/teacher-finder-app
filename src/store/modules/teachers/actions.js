export default {
    async registerTeacher(context, payload){
        const userId = context.rootGetters.userId;
        const teacherData = {
            // match names registration form to state
            firstName: payload.first,
            lastName: payload.last,
            description: payload.desc,
            hourlyRate: payload.rate,
            areas: payload.areas,
        };

        // send request to firebase 
        const response = await fetch(`https://teacher-finder-app-5fba7-default-rtdb.europe-west1.firebasedatabase.app/teachers/${userId}.json`, {
            method: 'PUT', // PUT - Overwritten if exited NOT POST
            body: JSON.stringify(teacherData), 
        });

        // const responseData = await response.json();

        if (!response.ok){
            // error handling

        }

        context.commit('registerTeacher', {
            ...teacherData,
            id: userId
        });
    }
};