<template>
    <div class="logout-base">
        <base-site>
        </base-site>
        <h1>You are now logged out</h1>
        <home-button class="home-b"></home-button>
    </div>
</template>

<script>
import BaseSite from '@/components/UI/BaseSite.vue';
import HomeButton from '@/components/UI/HomeButton.vue';

export default {
    name: 'LogoutPage',
    setup() {
        return {
            BaseSite,
            HomeButton
        }
    },
    created: function () {
        this.$store.commit('logout');
    }
}
</script>

<style scoped>
    .logout-base {
        text-align: center;
    }
    .home-b {
        margin-top: 4vh;
    }
    h1 {
        margin-top: 16vh;
        font-size: 70px;
        color: #405c6a;
    }
</style>
