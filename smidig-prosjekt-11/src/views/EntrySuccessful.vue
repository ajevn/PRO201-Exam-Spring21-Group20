<template>
    <div v-if="user">
        <div class="entry-succesful">
            <base-site />
        </div>

        <!-- Renders Component to show text/icon/home-btn -->
        <approved-report />

        <progress-bar />
    </div>
    <redirect-login v-else />
</template>

<script>
// @ is an alias to /src
import BaseSite from '@/components/UI/BaseSite.vue';
import ApprovedReport from '@/components/Feedback/ApprovedReport.vue';
import ProgressBar from '@/components/Feedback/ProgressBar.vue';
import RedirectLogin from '@/components/Login/RedirectLogin.vue';
import { useStore } from 'vuex';

export default {
    name: 'entrySuccesful',
    setup() {
        const store = useStore();
        const user = store.getters.getUserId;
        return {
            user,
            BaseSite,
            ApprovedReport,
            ProgressBar,
            RedirectLogin
        };
    }
};
</script>

<style scoped></style>
