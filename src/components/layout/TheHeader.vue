<template>
    <header>
        <nav>
            <!-- Logo -->
            <h1><router-link to="/">TutoresDe<span>Español</span>.com</router-link></h1>
            <!-- Nav -->
            <ul>
                <li><router-link to="/teachers">Find a Teacher</router-link></li>
                <li><router-link to="/requests">Requests</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>

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
</style>