export default {
    registerTeacher(context, payload){
        const teacherData = {
            // match names registration form to state
            id: 'c3',
            firstName: payload.first,
            lastName: payload.last,
            description: payload.desc,
            hourlyRate: payload.rate,
            areas: payload.areas,
        };

        context.commit('registerTeacher', teacherData);
    }
};