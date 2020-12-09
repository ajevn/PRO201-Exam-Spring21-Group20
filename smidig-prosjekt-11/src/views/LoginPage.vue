<template>
    <div>
        <base-site>
            <login />
            <login-button />
        </base-site>
    </div>
</template>

<script>
import BaseSite from '@/components/UI/BaseSite.vue';
import Login from '@/components/UI/Login.vue';
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

<style scoped></style>
