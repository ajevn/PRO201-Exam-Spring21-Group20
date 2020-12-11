<template>
    <base-site>
        <div class="login-base">
            <login />
        </div>
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
    margin-top: 7vh
}

</style>
