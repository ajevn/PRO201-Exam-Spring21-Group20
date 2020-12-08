<template>
    <div>
        <div class="entry-succesful">
            <base-site />
            <nav-bar />
        </div>
        <approved-report />

        <progress-bar />
    </div>
</template>

<script>
// @ is an alias to /src
import BaseSite from '@/components/UI/BaseSite.vue';
import ApprovedReport from '../components/Feedback/ApprovedReport.vue';
import NavBar from '../components/Nav/NavBar.vue';
import ProgressBar from '../components/Feedback/ProgressBar.vue';

export default {
    name: 'Entry Successful',
    components: {
        BaseSite,
        ApprovedReport,
        NavBar,
        ProgressBar
    }
};
</script>

<style scoped></style>
