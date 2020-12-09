<template>
    <div class="entry-succesful">
        <base-site />
    </div>
    <approved-report />

    <progress-bar />
</template>

<script>
// @ is an alias to /src
import BaseSite from '@/components/UI/BaseSite.vue';
import ApprovedReport from '@/components/Feedback/ApprovedReport.vue';
import ProgressBar from '../components/Feedback/ProgressBar.vue';


export default {
    name: 'entrySuccesful',
    components: {
        BaseSite,
        ApprovedReport,
        ProgressBar
    }
};
</script>

<style scoped></style>
