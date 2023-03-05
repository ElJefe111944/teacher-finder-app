export default {
    registerTeacher(state, payload){
        // push payload as new teacher
        state.teachers.push(payload);
    },
    setTeachers(state, payload){
        // set teacher in state to database in firebase
        state.teachers = payload;
    }
};