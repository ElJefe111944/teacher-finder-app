<template>
    <section>
        <!-- filter -->
        Filter
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
import BaseCard from '@/components/ui/BaseCard.vue';
     import TeacherItem from '../../components/teachers/TeacherItem.vue'
import BaseButton from '@/components/ui/BaseButton.vue';

    export default {
          
        components: {
            TeacherItem,
                BaseCard,
                BaseButton,
        },
        computed: {
            filteredTeachers(){
                // pull data from teacherModule in store
                // getters [namespaced name / getter name]
                return this.$store.getters['teachers/teachers'];
            },
            hasTeachers(){
                // check to see if teachers array is empty
                return this.$store.getters['teachers/hasTeachers'];
            }
        }
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