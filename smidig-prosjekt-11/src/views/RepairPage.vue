<template>
    <div class="repair" v-if="user">
        <base-site>
            <repair-overview />
            <section class="ListRepairs">
                <repair-info></repair-info>
            </section>
        </base-site>

        <progress-bar />
    </div>
    <redirect-login v-else />
</template>

<script>
import BaseSite from '@/components/UI/BaseSite.vue';
import RepairOverview from '@/components/Repair/RepairOverview.vue';
import RepairInfo from '@/components/Repair/RepairInfo.vue';
import ProgressBar from '@/components/Feedback/ProgressBar.vue';
import RedirectLogin from '@/components/Login/RedirectLogin.vue';

export default {
    data() {
        return {
            user: this.$store.getters.getUserId,
            ListOfRepairs: []
        };
    },
    name: 'Repair',
    components: {
        BaseSite,
        RepairOverview,
        RepairInfo,
        ProgressBar,
        RedirectLogin
    }
};
</script>
<style scoped></style>
