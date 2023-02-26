<template>
    <form>
        <div class="form-control">
            <label for="firstName">Firstname</label>
            <input type="text" id="firstName" v-model="firstName">
        </div>
        <div class="form-control">
            <label for="lastName">Surname</label>
            <input type="text" id="lastName" v-model="lastName">
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea name="description" id="description" rows="5" v-model="description"></textarea>
        </div>
        <div class="form-control">
            <label for="rate">Hourly Rate</label>
            <input type="number" id="rate" v-mode.number="rate">
        </div>
        <div class="form-control">
            <h3>Areas of Expertise</h3>
            <!-- check box section -->
            <div>
                <input type="checkbox" name="adults" id="adults">
                <label for="adults">Adults</label>
            </div>
            <div>
                <input type="checkbox" name="children" id="children">
                <label for="children">Children</label>
            </div>
            <div>
                <input type="checkbox" name="dele" id="dele">
                <label for="dele">DELE</label>
            </div>
            <div>
                <input type="checkbox" name="gcse" id="gcse">
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
    }
};
</script>