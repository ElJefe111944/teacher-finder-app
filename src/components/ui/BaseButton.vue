<template>
    <!-- btn -->
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <!-- a tag -->
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>

<script>

export default {
    props: {
        // to control diff in stylking between btn & link
        mode: {
            type: String,
            required: false,
            default: null,
        },
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false,
            default: '/',
        }
    }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #000000;
  border: 1px solid #000000;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #f1a605;
  border-color: #f1a605;
  color: #000000;
}

.flat {
  background-color: transparent;
  color: #000000;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #000000;
  color: #000000;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #f1a605;
}
</style>