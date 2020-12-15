<template>
    <!-- redirect page to login  -->
    <base-site class="base-site">
        <h1>В доступе отказано, пожалуйста, войдите</h1>
        <!-- Access denied, please log in -->
        <login-button />
    </base-site>
</template>

<script>
import LoginButton from '@/components/Login/LoginButton.vue';
import BaseSite from '@/components/UI/BaseSite.vue';
export default {
    setup() {
        return {
            LoginButton,
            BaseSite
        };
    }
};
</script>

<style>
.base-site {
    text-align: center;
}
h1 {
    margin-top: 16vh;

    font-size: 45px;
    color: #405c6a;
}
</style>
