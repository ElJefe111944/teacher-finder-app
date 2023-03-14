<template>
    <li>
        <!-- teacher details -->
        <h3>{{ fullName }}</h3>
        <h4>£{{ rate }}/hour</h4>
        <div class="badge-container">
            <!-- areas  -->
            <base-badge v-for="area in areas" :key="area" :title="area" :type="area" >           </base-badge>
        </div>
        <div class="actions">
            <base-button mode="outline" link :to="teacherContactLink">Contact</base-button>
            <base-button link :to="teacherDetailsLink">View Details</base-button>
        </div>
    </li>
</template>

<script>
import BaseBadge from '../ui/BaseBadge.vue';
import BaseButton from '../ui/BaseButton.vue';

export default {
  components: { BaseButton, BaseBadge },
    props: ['id','firstName','lastName','rate','areas'],
    computed: {
        fullName(){
            // combine first & last name
            return `${this.firstName} ${this.lastName}`;
        },
        teacherContactLink(){
            return `${this.$route.path}/${this.id}/contact`;
        },
        teacherDetailsLink(){
            return `${this.$route.path}/${this.id}`;
        }
    }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 1.25rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
@media(max-width: 768px){
  .badge-container {
    margin: 1.25rem 0;
    text-align: center;
}
h2 {
    font-size: 18px;
}
h3 {
    font-size: 16px;
}
.actions[data-v-216da247] {
    display: flex;
    justify-content: center;
}
}
</style>
