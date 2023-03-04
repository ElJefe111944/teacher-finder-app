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
                <input type="checkbox" name="adults" value="adults" id="adults" v-model="areas">
                <label for="adults">Adults</label>
            </div>
            <div>
                <input type="checkbox" name="children" value="children" id="children" v-model="areas">
                <label for="children">Children</label>
            </div>
            <div>
                <input type="checkbox" name="dele" value="dele" id="dele" v-model="areas">
                <label for="dele">DELE</label>
            </div>
            <div>
                <input type="checkbox" name="gcse" id="gcse" value="gcse" v-model="areas">
                <label for="gcse">GCSE</label>
            </div>
        </div>
        <!-- submit btn -->
        <base-button>Register</base-button>
    </form>
</template>

<script>

export default {
    emits: ['save-data'],
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
            // data from form passed to parent component - Teacher Registration
            this.$emit('save-data', formData);
        }
    }
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>