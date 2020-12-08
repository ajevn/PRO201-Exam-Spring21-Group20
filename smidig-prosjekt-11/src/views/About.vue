<template>
    <div class="about">
        <base-site>
            <nav-bar />
        </base-site>
        <h1></h1>
    </div>

    <progress-bar></progress-bar>
</template>

<script>
// @ is an alias to /src
import BaseSite from '@/components/UI/BaseSite.vue';
import NavBar from '@/components/Nav/NavBar.vue';

// To change color of elements in progressbar
import ProgressBar from '../components/Feedback/ProgressBar.vue';

export default {
    name: 'About',
    components: {
        BaseSite,
        NavBar,
        ProgressBar
    }
};
</script>

<style scoped></style>
