<template>
  <TheHeader />
  <router-view v-slot="slotProps">
    <!-- main routes animation elements  -->
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  },
  created(){
    this.$store.dispatch('autoLogin');
  },
  computed: {
    didAutoLogout(){
      return this.$store.getters.didAutoLogout;
    }
  },
  watch: {
    didAutoLogout(currentVal, oldVal){
      if(currentVal && currentVal !== oldVal){
        this.$router.replace('/teachers');
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Poppins', sans-serif;
}

body {
  margin: 0;
}
/*-- route animation --*/
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/*-- Mobile styling --*/
@media(max-width: 768px){
    /*-- Header --*/
  header[data-v-9778edae] {
    height: auto;
}
header nav[data-v-9778edae] {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}
h1 a[data-v-9778edae] {
  font-size: 22px;
}
    /*-- Links --*/
    ul li a {
        padding: 0px;
        width: 120px;
        padding: 6px 10px;
        white-space: nowrap;
        font-size: 12px;
        text-align: center;
        margin-bottom: 5px;
        border: none;
    }
    a[data-v-9778edae]:active, a[data-v-9778edae]:hover, a.router-link-active[data-v-9778edae] {
    border: none;
}
li[data-v-9778edae] {
    margin: 0;
}
div[data-v-216da247] {
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
span.filter-option {
    white-space: nowrap;
}
label {
    font-size: 13px;
}
.actions[data-v-216da247] {
    display: flex;
    justify-content: flex-start;
}
h3 {
    font-size: 16px;
}
.badge  {
    padding: 0.5rem 1.5rem;
    font-size: 12px;
    margin: 5px;
}
button[data-v-1d5dce04][data-v-1d5dce04], a[data-v-1d5dce04][data-v-1d5dce04] {
    padding: 0.55rem 1.5rem;
    font-size: 12px;
    display: flex;
    align-items: center;
    margin-bottom: 2px;
}
}
</style>
