export default {
    teachers(state){
        return state.teachers;
    },
    hasTeachers(state){
        // check to verify that teachers array isnt empty
        return state.teachers && state.teachers.length > 0;
    }    
};