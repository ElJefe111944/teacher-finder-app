<template>
    <form @submit.prevent="submitForm">
        <!-- Email -->
        <div class="form-control">
            <label for="email">Your E-Mail</label>
            <input type="text" id="email" name="message" v-model.trim="email" />
        </div>
        <!-- Messdage -->
        <div class="form-control">
            <label for="message">Message</label>
            <textarea name="message" id="message" rows="5" v-model.trim="message"></textarea>
        </div>
        <p class="errors" v-if="!formIsValid">Please enter a valid email & a non-empty message</p>
        <div class="actions">
            <base-button>Send Message</base-button>
        </div>
    </form>
</template>

<script>

export default {
    data(){
        return {
            email: '',
            message: '',
            formIsValid: true,
        }
    },
    methods: {
        submitForm(){
            // validation 
            this.formIsValid = true;
            // email validation & message
            if(this.email === '' || !this.email.includes('@') || this.message === ''){
                this.formIsValid = false;
                return;
            }
            // dispatch contactTeacher action from store
             // (request = namespaced module/ contactTeacher = action name)            
            this.$store.dispatch('requests/contactTeacher', {
              email: this.email,
              message: this.message,
              teacherId: this.$route.params.id,
            });
            // navigate away from page after submission
            this.$router.replace('/teachers'); // Use replace Not push so the user cannot go back after submission 
        },
    },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: rgb(185, 0, 0);
}

.actions {
  text-align: center;
}
</style>