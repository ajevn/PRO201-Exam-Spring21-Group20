<template>
    <div class="home">
        <base-site>
            <nav-bar />
            <landing-page>
                <home-select class="home-select-container" />
            </landing-page>
        </base-site>
    </div>
</template>

<script>
// @ is an alias to /src
import BaseSite from '@/components/UI/BaseSite.vue';
import HomeSelect from '@/components/Nav/HomeSelect.vue';
import NavBar from '@/components/Nav/NavBar.vue';
import LandingPage from '@/components/UI/LandingPage.vue';

export default {
    name: 'Home',
    components: {
        BaseSite,
        HomeSelect,
        NavBar,
        LandingPage
    }
};
</script>

<style scoped>
.home-select-container {
    position: absolute;
    left: 41vw;
    top: 40vh;
}
</style>
