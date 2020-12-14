<template>
    <base-site isDark="true">
        <div class="login-base">
            <login />
        </div>
        <img src="@/assets/Images/Background/Background.jpg" id="background-image" />
    </base-site>
</template>

<script>
import BaseSite from '@/components/UI/BaseSite.vue';
import Login from '@/components/Login/Login.vue';
export default {
    name: 'LoginPage',
    setup() {
        return {
            BaseSite,
            Login
        };
    }
};
</script>

<style scoped>
.login-base {
    margin-top: 7vh;
}
#background-image {
    position: absolute;
    top: 8vh;
    z-index: -10;
    width: 100vw;
    height: 92vh;
    background-image: url('../assets/Images/Background/Background.jpg');
    filter: grayscale(100%);
    overflow: hidden;
}
</style>
