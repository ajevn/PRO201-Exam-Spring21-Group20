<template>
    <div class="hamburger-menu">
        <hamburger-button/>
    </div>
</template>

<script>
import HamburgerButton from '../UI/HamburgerButton.vue'
export default {
    name: 'Hamburger',
    components: {HamburgerButton}
}
</script>

<style>

.hamburger-menu {
    z-index: 999;
    position: absolute;
    background-color: #9fd18d;
    margin-top: 3vh;
    margin-left: 3vh;
    height: 75vh;
    width: 35vh;
}
</style>