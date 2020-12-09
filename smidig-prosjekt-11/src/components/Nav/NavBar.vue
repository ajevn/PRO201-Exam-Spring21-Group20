<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/repair">Repair</router-link>
        |
        <router-link to="/login">Login</router-link>
        |
        <router-link to="/entry-successful">Entry Succesful</router-link>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav a {
    font-weight: bold;
    color: #3c1964;
}
#nav a.router-link-exact-active {
    color: #9fd18d;
}
</style>
