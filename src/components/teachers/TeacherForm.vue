<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="firstName">Firstname</label>
            <input type="text" id="firstName" v-model.trim="firstName">
        </div>
        <div class="form-control">
            <label for="lastName">Surname</label>
            <input type="text" id="lastName" v-model.trim="lastName">
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea name="description" id="description" rows="5" v-model.trim="description"></textarea>
        </div>
        <div class="form-control">
            <label for="rate">Hourly Rate</label>
            <input type="number" id="rate" v-mode.number="rate">
        </div>
        <div class="form-control">
            <h3>Areas of Expertise</h3>
            <!-- check box section -->
            <div>
                <input type="checkbox" name="adults" id="adults" v-model="areas">
                <label for="adults">Adults</label>
            </div>
            <div>
                <input type="checkbox" name="children" id="children" v-model="areas">
                <label for="children">Children</label>
            </div>
            <div>
                <input type="checkbox" name="dele" id="dele" v-model="areas">
                <label for="dele">DELE</label>
            </div>
            <div>
                <input type="checkbox" name="gcse" id="gcse" v-model="areas">
                <label for="gcse">GCSE</label>
            </div>
        </div>
        <!-- submit btn -->
        <base-button>Register</base-button>
    </form>
</template>

<script>

export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            description: '',
            rate: null,
            areas: [],
        }
    },
    methods: {
        submitForm(){
            const formData = {
                first: this.firstName,
                last: this.lastName,
                desc: this.description,
                rate: this.rate,
                areas: this.areas,
            };
            console.log(formData);
        }
    }
};
</script>