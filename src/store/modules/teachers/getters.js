export default {
    teachers(state){
        return state.teachers;
    },
    hasTeachers(state){
        // check to verify that teachers array isnt empty
        return state.teachers && state.teachers.length > 0;
    },
    isTeacher(_, getters, _2, rootGetters){
        const teachers = getters.teachers;
        const userId = rootGetters.userId;
        // check if id matches 
        return teachers.some(teacher => teacher.id === userId);
    },
    shouldUpdate(state){
        const lastFetch = state.lastFetch;
        if(!lastFetch){
            return true;
        }
        const currentTimeStamp = new Date().getTime();
        return (currentTimeStamp - lastFetch) / 1000 > 60; // returns true if greater than 1 minute
    }  
};