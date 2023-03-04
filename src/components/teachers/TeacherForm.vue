<template>
    <form @submit.prevent="submitForm">
        <!-- First Name -->
        <div class="form-control" :class="{invalid: !firstName.isValid}">
            <label for="firstName">Firstname</label>
            <input type="text" id="firstName" v-model.trim="firstName.val" @blur="clearValidity('firstName')">
            <p class="error-message" v-if="!firstName.isValid">Firstname must not be empty.</p>
        </div>
        <!-- Last Name -->
        <div class="form-control" :class="{invalid: !lastName.isValid}">
            <label for="lastName">Surname</label>
            <input type="text" id="lastName" v-model.trim="lastName.val" @blur="clearValidity('lastName')">
            <p class="error-message" v-if="!lastName.isValid">Lastname must not be empty.</p>
        </div>
        <!-- Description -->
        <div class="form-control" :class="{invalid: !description.isValid}">
            <label for="description">Description</label>
            <textarea name="description" id="description" rows="5" v-model.trim="description.val" @blur="clearValidity('description')"></textarea>
            <p class="error-message" v-if="!description.isValid">Description must not be empty.</p>
        </div>
        <!-- Hourly Rate -->
        <div class="form-control" :class="{invalid: !rate.isValid}">
            <label for="rate">Hourly Rate</label>
            <input type="number" name="rate" id="rate" v-model.number="rate.val" @blur="clearValidity('rate')">
            <p class="error-message" v-if="!rate.isValid">Rate must be greater than 0.</p>
        </div>
        <!-- Areas -->
        <div class="form-control" :class="{invalid: !areas.isValid}">
            <h3>Areas of Expertise</h3>
            <!-- check box section -->
            <div>
                <input type="checkbox" name="adults" value="adults" id="adults" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="adults">Adults</label>
            </div>
            <div>
                <input type="checkbox" name="children" value="children" id="children" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="children">Children</label>
            </div>
            <div>
                <input type="checkbox" name="dele" value="dele" id="dele" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="dele">DELE</label>
            </div>
            <div>
                <input type="checkbox" name="gcse" id="gcse" value="gcse" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="gcse">GCSE</label>
            </div>
            <p class="error-message" v-if="!areas.isValid">At least one expertise must be selected.</p>
        </div>
        <!-- Validation error message -->
        <p class="error-message" v-if="!formIsValid">Please fix the above errors and submit again.</p>
        <!-- submit btn -->
        <base-button>Register</base-button>
    </form>
</template>

<script>

export default {
    emits: ['save-data'],
    data() {
        return {
            firstName: {
                val: '',
                isValid: true
            },
            lastName: {
                val: '',
                isValid: true
            },
            description: {
                val: '',
                isValid: true
            },
            rate: {
                val: null,
                isValid: true
            },
            areas: {
                val: [],
                isValid: true
            },
            formIsValid: true,
        }
    },
    methods: {
        clearValidity(input){
            // to clear error messaging & styles when input loses focus
            this[input].isValid = true;
        },
        validateForm() {
            this.formIsValid = true;
            // check first name
            if (this.firstName.val === '') {
                this.firstName.isValid = false;
                this.formIsValid = false
            }
            // check last name
            if (this.lastName.val === '') {
                this.lastName.isValid = false;
                this.formIsValid = false
            }
            // check description
            if (this.description.val === '') {
                this.description.isValid = false;
                this.formIsValid = false
            }
            // check rate
            if (!this.rate.val || this.rate.val < 0) {
                this.rate.isValid = false;
                this.formIsValid = false
            }
            // check areas
            if (this.areas.val.length === 0) {
                this.areas.isValid = false;
                this.formIsValid = false
            }
        },
        submitForm(){
            this.validateForm();

            // after form validation method
            // check if valid/invalid
            if(!this.formIsValid){
                // rest of method will not execute
                return;
            }

            const formData = {
                first: this.firstName.val,
                last: this.lastName.val,
                desc: this.description.val,
                rate: this.rate.val,
                areas: this.areas.val,
            };
            console.log(formData);
            // data from form passed to parent component - Teacher Registration
            this.$emit('save-data', formData);
            // redirect to homepage after submission
            this.$router.replace('/teachers');
        }
    }
};
</script>

<style scoped>
.error-message {
    color: rgb(185, 0, 0);
}
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
  color: rgb(185, 0, 0);
}

.invalid input,
.invalid textarea {
  border: 1px solid rgb(185, 0, 0);
}
</style>