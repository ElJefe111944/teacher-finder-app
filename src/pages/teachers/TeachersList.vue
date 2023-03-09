<template>
    <base-dialog @close="handleError" :show="!!error" title="An error occured!"><!-- !! - converts error to boolean -->
        <p>{{ error }}</p>
    </base-dialog>
    <section>
        <!-- filter -->
        <TeacherFilter @change-filter="setFilters" />
    </section>
    <section>
        <!-- Card -->
        <base-card>
            <!-- refresh & Register btns -->
            <div class="controls">
                <base-button mode="outline" @click="loadTeachers(true)">Refresh</base-button>
                <base-button v-if="!isTeacher && !isLoading" link to="/register">Register as a Teacher</base-button>
            </div>
            <!-- Loading spinner -->
            <div v-if="isLoading">
                <base-spinner></base-spinner>
            </div>
            <!-- list of teachers -->
            <ul v-else-if="hasTeachers">
                <TeacherItem v-for="teacher in filteredTeachers" :key="teacher.id" :id="teacher.id"
                    :first-name="teacher.firstName" :last-name="teacher.lastName" :rate="teacher.hourlyRate"
                    :areas="teacher.areas" />
            </ul>
            <!-- If no teachers are found -->
            <h3 v-else>No teachers found...</h3>
            <!-- end of card -->
        </base-card>
    </section>
</template>
    
<script>
import TeacherItem from '../../components/teachers/TeacherItem.vue';
import TeacherFilter from '@/components/teachers/TeacherFilter.vue';


export default {

    components: {
        TeacherItem,
        TeacherFilter,

    },
    data() {
        return {
            isLoading: false,
            error: null,
            activeFilters: {
                adults: true,
                dele: true,
                children: true,
                gcse: true,
            }
        };
    },
    computed: {
        isTeacher() {
            // verify if user is already registered as a coach
            return this.$store.getters['teachers/isTeacher'];
        },
        filteredTeachers() {
            // pull data from teacherModule in store
            // getters [namespaced name / getter name]
            const teachers = this.$store.getters['teachers/teachers'];
            // return teachers that have been filtered
            return teachers.filter(teacher => {
                if (this.activeFilters.adults && teacher.areas.includes('adults')) {
                    return true;
                }
                if (this.activeFilters.children && teacher.areas.includes('children')) {
                    return true;
                }
                if (this.activeFilters.dele && teacher.areas.includes('dele')) {
                    return true;
                }
                if (this.activeFilters.gcse && teacher.areas.includes('gcse')) {
                    return true;
                }
                return false;
            });
        },
        hasTeachers() {
            // check to see if teachers array is empty
            return !this.isLoading && this.$store.getters['teachers/hasTeachers'];
        }
    },
    created(){
        // trigger loadTeachers method when component is created 
        this.loadTeachers();
    },
    methods: {
        setFilters(updatedFilters) {
            // overwrite active filters with updated filters
            this.activeFilters = updatedFilters;
        },
        async loadTeachers(refresh = false){
            this.isLoading = true;
            // dispatch loadTeachers action from store
            // to be triggered when component is created 
            try {
                await this.$store.dispatch('teachers/loadTeachers', {forceRefresh: refresh});
            } catch (error) {
                this.error = error.message || 'Something went wrong';
            }
        
            this.isLoading = false;

        },
        handleError(){
            this.error = null;
        }
    },
}

    </script>

    <style scoped>
        ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
    </style>