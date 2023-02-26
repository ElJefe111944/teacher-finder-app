<template>
    <section>
        <!-- filter -->
        Filter
    </section>
    <section>
        <!-- refresh & Register btns -->
        <div class="controls">
            <button>Refresh</button>
            <router-link to="/register">Register as a Teacher</router-link>
        </div>
        <!-- list of teachers -->
        <ul>
            <li v-for="teacher in filteredTeachers" :key="teacher.id">
            {{ teacher.firstName }}
            </li>
        </ul>
    </section>
    </template>
    
    <script>

    export default {

        computed: {
            filteredTeachers(){
                // pull data from teacherModule in store
                // getters [namespaced name / getter name]
                return this.$store.getters['teachers/teachers'];
            }
        }
    }
    
    </script>