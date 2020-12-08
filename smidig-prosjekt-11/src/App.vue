<template>
    <!-- DARK MODE:: <div class="bg-white dark:bg-gray-800">-->
    <div>
        <!-- Decides which component to render in #app HTML. -->
        <router-view />
    </div>
</template>

<script>
export default {};
</script>

<style>
#nav a {
    font-weight: bold;
    color: #2c3e50;
}
#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
