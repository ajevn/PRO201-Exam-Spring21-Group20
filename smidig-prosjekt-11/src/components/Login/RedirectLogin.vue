<template>
    <base-site>
        <div
            id="redirect-container"
            class=" relative container w-full max-w-xs m-auto bg-logoBar rounded p-5 self-center"
        >
            <h1>You need to login</h1>
            <login-button />
        </div>
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

<style lang="scss" scoped>
#redirect-container {
    height: 200px;
    background-color: #405c6a;
    margin: auto;
    margin-top: 20vh;
    text-align: center;

    h1 {
        font-weight: bold;
        margin-bottom: 10%;
        color: #a8d598;
    }
}
</style>
