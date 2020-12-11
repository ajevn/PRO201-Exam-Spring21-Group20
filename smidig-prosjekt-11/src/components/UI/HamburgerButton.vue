<template>
    <div class="hamburger-button font-standardText">
        <router-link v-if="this.link" :to="this.link">
            <div class="button-wrapper">
                <img :src="require(`@/assets/Images/Icons/${this.icon}`)" />
                <div>{{ this.bValue }}</div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'HamburgerButton',
    components: {},

    props: {
        bValue: String,
        icon: String,
        link: String
    }
};
</script>

<style lang="scss">
.hamburger-button {
    width: 70%;
    height: 8vh;
    background-color: #9fd18d;
    margin-top: 3vh;
    border-radius: 5px;
}

.button-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    color: #423048;
    padding-top: 17px;
    padding-bottom: 13px;

    font-size: 1.2em;
    font-weight: bold;

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: center;

    img {
        margin: 0 auto;
        width: 25%;
    }
}
</style>
