<template>
    <div class="repair">
        <base-site>
            <nav-bar />
            <repair-overview />
            <section class="ListRepairs">
                <repair-info></repair-info>
            </section>
        </base-site>

        <progress-bar />
    </div>
</template>

<script>
import BaseSite from '@/components/UI/BaseSite.vue';
import NavBar from '@/components/Nav/NavBar.vue';
import RepairOverview from '@/components/Repair/RepairOverview.vue';
import RepairInfo from '@/components/Repair/RepairInfo.vue';
import ProgressBar from '../components/Feedback/ProgressBar.vue';
export default {
    data() {
        return {
            ListOfRepairs: []
        };
    },
    name: 'Repair',
    components: {
        BaseSite,
        NavBar,
        RepairOverview,
        RepairInfo,
        ProgressBar
    }
};
</script>
