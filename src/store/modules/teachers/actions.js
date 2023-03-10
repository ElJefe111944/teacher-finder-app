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
    },
    async loadTeachers(context, payload){
        // verify if 1 minute has passed simce last update
        if(!payload.forceRefresh && !context.getters.shouldUodate){
            return; // stick to current data in store
        }
        // update current data by sending http request 
        const response = await fetch(`https://teacher-finder-app-5fba7-default-rtdb.europe-west1.firebasedatabase.app/teachers/.json`);
        const responseData = await response.json();

        if(!response.ok){
            // error handling 
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }
        // reformat object from firebase
        const teachers = [];
        // key = teacher id
        for(const key in responseData){
            const teacherData = {
                // match names registration form to state
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas,
            };
            teachers.push(teacherData);
        }
        context.commit('setTeachers', teachers);
        context.commit('setFetchTimeStamp');
    },
};