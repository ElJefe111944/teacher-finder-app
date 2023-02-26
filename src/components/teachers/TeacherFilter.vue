<template>
    <base-card>
        <h2>Find a Teacher</h2>
        <!-- checkbox -->
        <!-- option 1 -->
        <span class="filter-option">
            <input type="checkbox" id="adults" checked @change="setFilter">
            <label for="adults">Adults</label>
        </span>
        <!-- option 2 -->
        <span class="filter-option">
            <input type="checkbox" id="dele" checked @change="setFilter">
            <label for="dele">DELE</label>
        </span>
        <!-- option 3 -->
        <span class="filter-option">
            <input type="checkbox" id="children" checked @change="setFilter">
            <label for="children">Children</label>
        </span>
        <!-- option 4 -->
        <span class="filter-option">
            <input type="checkbox" id="gcse" checked @change="setFilter">
            <label for="gcse">GCSE</label>
        </span>
        <!-- option 5
        <span class="filter-option">
            <input type="checkbox" id="a_levels" checked @change="setFilter">
            <label for="a_levels">A-Levels</label>
        </span> -->
    </base-card>
</template>

<script>

export default {
    emits: ['change-filter'],
    data(){
        return {
            // all checked so defualt of true
            filters: {
                adults: true,
                dele: true,
                children: true,
                gcse: true,  
            }
        }
    },
    methods: {
        setFilter(event){
            const inputId = event.target.id;
            const isActive = event.target.checked;
            // copy existing filters properties
            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive
            };
            // update filters
            this.filters = updatedFilters;
            // pass updated filters to parent component
            // to modify list rendered on teacher list page
            this.$emit('change-filter', updatedFilters);
        }
    }
}

</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>