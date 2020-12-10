<template>
    <base-site>
        <h1>you need to login</h1>
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

<style></style>
