<template>
    <div class="repair">
        <base-site>
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
import RepairOverview from '@/components/Repair/RepairOverview.vue';
import RepairInfo from '@/components/Repair/RepairInfo.vue';
import ProgressBar from '@/components/Feedback/ProgressBar.vue';

export default {
    data() {
        return {
            ListOfRepairs: []
        };
    },
    name: 'Repair',
    components: {
        BaseSite,
        RepairOverview,
        RepairInfo,
        ProgressBar
    },
    methods: {
        toggleBlur: function() {}
    }
};
</script>
<style scoped></style>
