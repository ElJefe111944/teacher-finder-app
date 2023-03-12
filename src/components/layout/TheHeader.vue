<template>
    <header>
        <nav>
            <!-- Logo -->
            <h1><router-link to="/">TutoresDe<span>Español</span>.com</router-link></h1>
            <!-- Nav -->
            <ul>
                <li><router-link to="/teachers">All Teachers</router-link></li>
                <li v-if="isLoggedIn"><router-link to="/requests">Requests</router-link></li>
                <li v-else><router-link to="/auth">Login</router-link></li>
                <li v-if="isLoggedIn"><base-button @click="logout">Logout</base-button></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn(){
            return this.$store.getters.isAuthenticated;
        },
  },
  methods: {
    logout(){
      this.$store.dispatch('logout');
      this.$router.replace('/teachers');
    }
  }
}

</script>

<style scoped>

header {
  width: 100%;
  height: 5rem;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #fff;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  font-family: 'Poppins', sans-serif;
  border: 1px solid #fff;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f1a605;
  color: #f1a605;
}
h1 a {
    border: none;
}
h1 {
  margin: 0;
}
h1 span {
    color: #f1a605;
    font-style: normal;
}

h1 a {
  color: #fff;
  margin: 0;
}
h1 a:hover {
  color: #fff;
  border: none;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
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
}
</style>