<template>
    <section>
        <base-card>
        <h2>Register as a teacher now!</h2>
        <TeacherForm @save-data="saveData"/>
        </base-card>
    </section>
</template>

<script>
import TeacherForm from '@/components/teachers/TeacherForm.vue';

export default {
    components: {
        TeacherForm,
    },
    methods: {
        saveData(data){
            this.$store.dispatch('teachers/registerTeacher', data);
        }
    }
}

</script>