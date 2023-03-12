<template>
    <div>
        <!-- teacher details -->
        <section>
            <base-card>
                <h2>{{ fullName }}</h2>
                <h3>£{{ rate }}/hour</h3>
            </base-card>
        </section>
        <!-- contact teacher -->
        <section>
            <base-card>
                <header>
                    <h2>Interested? Contact {{ firstName }} below..</h2>
                    <base-button link :to="contactLink">Contact</base-button>
                </header>
                <router-view></router-view>
            </base-card>
        </section>
        <!-- teacher info -->
        <section>
            <base-card>
                <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
                <p>{{ description }}</p>
            </base-card>
        </section>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return {
            selectedTeacher: null,
        };
    },
    computed: {
        firstName(){
            return this.selectedTeacher.firstName;
        },
        areas(){
            return this.selectedTeacher.areas;
        },
        rate(){
            return this.selectedTeacher.hourlyRate;
        },
        fullName(){
            return `${this.selectedTeacher.firstName} ${this.selectedTeacher.lastName}`
        },
        contactLink(){
            return `${this.$route.path}/contact`;
        },
        description(){
            return this.selectedTeacher.description;
        },
    },
    created(){
        // render specific tacher that matches this.id
        this.selectedTeacher = this.$store.getters['teachers/teachers'].find((teacher) => teacher.id === this.id);
    },
}
</script>
