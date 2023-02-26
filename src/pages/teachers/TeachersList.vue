<template>
    <section>
        <!-- filter -->
        <TeacherFilter @change-filter="setFilters" />
    </section>
    <section>
        <!-- Card -->
        <base-card>
        <!-- refresh & Register btns -->
        <div class="controls">
            <base-button mode="outline">Refresh</base-button>
            <base-button link to="/register">Register as a Teacher</base-button>
        </div>
        <!-- list of teachers -->
        <ul v-if="hasTeachers">
            <TeacherItem v-for="teacher in filteredTeachers" 
            :key="teacher.id" 
            :id="teacher.id"
            :first-name="teacher.firstName" 
            :last-name="teacher.lastName" 
            :rate="teacher.hourlyRate" 
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
        data(){
            return {
                activeFilters: {
                    adults: true,
                    dele: true,
                    children: true,
                    gcse: true,  
                }
            };
        },
        computed: {
            filteredTeachers(){
                // pull data from teacherModule in store
                // getters [namespaced name / getter name]
                const teachers =  this.$store.getters['teachers/teachers'];
                // return teachers that have been filtered
                return teachers.filter(teacher => {
                    if(this.activeFilters.adults && teacher.areas.includes('adults')){
                        return true;
                    }
                    if(this.activeFilters.children && teacher.areas.includes('children')){
                        return true;
                    }
                    if(this.activeFilters.dele && teacher.areas.includes('dele')){
                        return true;
                    }
                    if(this.activeFilters.gcse && teacher.areas.includes('gcse')){
                        return true;
                    }
                    return false;
                });
            },
            hasTeachers(){
                // check to see if teachers array is empty
                return this.$store.getters['teachers/hasTeachers'];
            }
        },
        methods: {
            setFilters(updatedFilters){
                // overwrite active filters with updated filters
                this.activeFilters = updatedFilters;
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