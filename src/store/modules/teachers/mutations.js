export default {
    registerTeacher(state, payload){
        // push payload as new teacher
        state.teachers.push(payload);
    }
};