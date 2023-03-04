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

    }    
};